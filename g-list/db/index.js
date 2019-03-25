const mysql = require('mysql');

const connection = mysql.createConnection({
  database: 'grocery_list',
  user: 'root',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to the db');
  }
})

module.exports = connection;
