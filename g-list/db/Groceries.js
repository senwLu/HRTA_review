var db = require('./index.js');

module.exports.getGroceries = function (callback) {
  db.query('SELECT * FROM groceries;', (err, rows, fields) => {
    if(err) return callback(err)
    callback(null, rows)
  })
}

module.exports.postGroceries = function (newGrocery, callback) {
  const queryString = 'INSERT INTO groceries (name, quantity) VALUES (?, ?)'
  db.query(queryString, [newGrocery.name, newGrocery.quantity], (err, rows) => {
    if(err) return callback(err)
    callback(null, rows)
  })
}