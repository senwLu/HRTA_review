const mongoose = require('mongoose')

if(process.env.MLABURL)
  mongoose.connect(process.env.MLABURL)
else
  mongoose.connect('mongodb://localhost/hrnyc19-fetcher')

let repoSchema = mongoose.Schema({
  url: {type: String, unique: true},
  user: String,
  stars: Number,
  name: String
})

let Repo = mongoose.model('Repo', repoSchema)

const save = (repos) => {
  return Promise.all(
    repos.map(repo => {
      return Repo.findOneAndUpdate(
        {url: repo.html_url},
        {
          url: repo.html_url,
          user: repo.owner.login,
          stars: repo.stargazers_count,
          name: repo.name
        },
        {upsert: true}
      ).exec()
    })
  )
}

const retrieve = () => {
  return Repo.find({})
             .sort('-stars')
             .limit(25)
             .exec()
}

module.exports.save = save
module.exports.retrieve = retrieve
