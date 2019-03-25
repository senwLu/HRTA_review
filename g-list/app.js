const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db/Groceries')
const port = 3000

app.use(bodyParser.json())
app.use(express.static('./client/dist'))

app.get('/groceries', (req, res) => {
  db.getGroceries((err, rows) => {
    if(err) return res.status.send(err)
    res.send(rows)
  })
})

app.post('/groceries', (req, res) => {
  const newGroceries = {
    name: req.body.name,
    quantity: req.body.quantity
  }
  db.postGroceries(newGroceries, (err, data) => {
    if (err) return res.status(500).send(err)
    res.send(200)
  })
})

app.listen(port, () => {
  console.log('Listening on port', port);
})