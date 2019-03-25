const request = require('request')

let config = null
try {
  config = require('../config.js').TOKEN
} catch(err) {
  config = process.env.GITHUBTOKEN
}

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config}`
    }
  }

  request.get(options, (err, response, body) => {
    if(err) return callback(err)
    else callback(null, JSON.parse(body))
  })
}

module.exports.getReposByUsername = getReposByUsername
