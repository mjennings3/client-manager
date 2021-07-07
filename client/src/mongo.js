const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/clients', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  const clientsSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    street: String,
    street: String,
    city: String,
    state: String,
    zipcode: Number,
    phone: String,
    email: String
  });
});

// CONSIDER MYSQL