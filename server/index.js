const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mysqlConnection = process.env.MYSQL_CONNECTION || { host: 'localhost', user: 'root', password: null, database: 'clientManager' };

var connection = mysql.createConnection(mysqlConnection);
const port = process.env.PORT || 3000;

// require('dotenv').config();
connection.connect()

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/clients', (req, res) => {
  let sql = `SELECT * FROM clients;`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.send(rows);
    res.end();
  })
});

app.get('/jobs', (req, res) => {
  let sql = `SELECT * FROM jobs;`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.send(rows);
    res.end();
  })
});

app.post('/clients', (req, res) => {
  let sql = `
  INSERT INTO clients (firstName, lastName, streetAddress, city, state, zipCode, phone, email)
  VALUES ("${req.body.firstName}","${req.body.lastName}","${req.body.streetAddress}","${req.body.city}","${req.body.state}","${req.body.zipCode}","${req.body.phone}","${req.body.email}")
  ;`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.send(rows);
    res.end()
  })
});

app.post('/clients/:client_id/jobs', (req, res) => {
  let client_id = req.params.client_id
  let sql = `
  INSERT INTO jobs (client_id, date)
  VALUES (${client_id}, "${req.body.date}")
  ;`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  })
});

app.put('/clients', (req, res) => {

});

app.delete('/clients/:client_id', (req, res) => {
  let sql = `DELETE FROM clients WHERE client_id=${req.params.client_id};`;
  connection.query(sql, (err, rows) => {
    if (err) throw err;
    res.end();
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});