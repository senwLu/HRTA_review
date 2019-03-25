const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const db = require('./db/Checkouts');

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/checkout', (req, res) => {
  const newCheckout = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phone: req.body.phone,
    card_number: req.body.card_number,
    expire_date: req.body.expire_date,
    cvv: req.body.cvv,
    billing_zip: req.body.billing_zip,
  }
  db.postCheckout(newCheckout, (err, data) => {
    if(err) res.status(500).send(err)
    res.send(200);
  })
})

app.listen(port, () => {
  console.log(`app is listening on ${port}`)
})