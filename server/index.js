const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mysqlConnection = process.env.MYSQL_CONNECTION || { host: 'localhost', user: 'root', password: null, database: 'clientManager' };

var twilio = require('twilio')
var client = new twilio(process.env.TWILIO_ACCOUNT_SID || 'AC582440b486644e8300ebf71492c6f4d2', process.env.TWILIO_AUTH_TOKEN || '76d4b0d294a2f5bf72a5e35fe1b54176')

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

app.post('/sms/:phone_number', (req, res) => {
  client.messages.create({
    body: `Hey ${req.body.name}, we're texting you to remind you of your appointment with Splendid Window Cleaning on ${req.body.date}.\n
    If you need to cancel or reschedule, please call us at (732)-609-7082. Otherwise, see you then! `,
    to: `+1${req.params.phone_number}`,  // Text this number
    from: '+14693738866' // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
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