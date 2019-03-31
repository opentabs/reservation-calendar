/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// make connection to database
const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host: 'localhost',
  user: config.user,
  password: config.password,
  database: 'reservations',
});

connection.connect();

module.exports = connection;
