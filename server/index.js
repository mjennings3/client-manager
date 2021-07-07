const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/clients', (req, res) => {

});

app.post('/clients', (req, res) => {

});

app.put('/clients', (req, res) => {

});

app.delete('/clients', (req, res) => {

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});