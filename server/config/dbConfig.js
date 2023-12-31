const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('mongoDB connection succesfully');
});

connection.on('error', (err) => {
  console.log('mongoDB connection failed');
});

module.exports = connection;