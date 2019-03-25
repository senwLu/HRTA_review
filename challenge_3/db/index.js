const mysql = require('mysql');

const connection = mysql.createConnection({
  database: 'checkout_list',
  user: 'root',
  password: 'root'
})

connection.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connected to db');
  }
})

module.exports = connection;