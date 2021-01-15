"use strict";

var mysql = require('mysql');

var connection; // let connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   // NOTE: Be sure to add your MySQL password here!
//   password: 'Xavier1977!',
//   database: 'burgers_db',
// });

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Xavier1977!',
    database: 'burgers_db'
  });
} // Make connection.


connection.connect(function (err) {
  if (err) {
    console.error("error connecting: ".concat(err.stack));
    return;
  }

  console.log("connected as id ".concat(connection.threadId));
}); // Export connection for our ORM to use.

module.exports = connection;