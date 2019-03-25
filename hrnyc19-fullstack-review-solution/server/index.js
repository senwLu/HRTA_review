const express = require('express')
const {retrieve, save} = require('../database/')
const parser = require('body-parser')
const {getReposByUsername} = require('../helpers/github.js')

const app = express()

app.use(express.static(__dirname + '/../client/dist'))
app.use(parser.json())

app.post('/repos', function(req, res) {
  const {username} = req.body
  getReposByUsername(username, (err, repos) => {
    if(err) return res.sendStatus(500)
    else save(repos)
          .then(() => res.sendStatus(201))
          .catch(() => res.sendStatus(500))
  })
})

app.get('/repos', function(req, res) {
  retrieve()
    .then((data) => res.send(data))
    .catch((err) => res.sendStatus(500))
})

let port = process.env.PORT || 1128

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})
