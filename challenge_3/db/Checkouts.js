const db = require('./index.js');

module.exports.postCheckout = function (newCheckout, callback) {
  var querystring = `INSERT INTO checkout (name, email, password, 
                                        address1, address2, 
                                        city, state, zip, phone, card_number, 
                                        expire_date, cvv, billing_zip) 
                      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  db.query(querystring, [newCheckout.name, newCheckout.email, newCheckout.password,
    newCheckout.address1, newCheckout.address2, newCheckout.city, newCheckout.state, 
    newCheckout.zip, newCheckout.phone, newCheckout.card_number, newCheckout.expire_date, 
    newCheckout.cvv, newCheckout.billing_zip], (err,rows) => {
    if(err) return callback(err)
    callback(null,rows)
  })
}