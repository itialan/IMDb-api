const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://127.0.0.1:27017/movie-api';
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected success!');
});
