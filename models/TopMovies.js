const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

const TopMovie = mongoose.model('TopMovie', movieSchema);
const PopularMovie = mongoose.model('PopularMovie', movieSchema);
const DateReleasesMovie = mongoose.model('DateReleasesMovie', movieSchema);

module.exports = {
  TopMovie: TopMovie,
  PopularMovie: PopularMovie,
  DateReleasesMovie: DateReleasesMovie
};
