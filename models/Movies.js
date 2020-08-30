const mongoose = require('mongoose');

const ratingMovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    default: 0
  }
});

const dateReleasesSchema = new mongoose.Schema({
  dateReleases: {
    type: Date,
    require: true
  },
  name: {
    type: String,
    require: true
  }
});

const TopMovie = mongoose.model('TopMovie', ratingMovieSchema);
const PopularMovie = mongoose.model('PopularMovie', ratingMovieSchema);
const DateReleasesMovie = mongoose.model('DateReleasesMovie', dateReleasesSchema);

module.exports = {
  TopMovie: TopMovie,
  PopularMovie: PopularMovie,
  DateReleasesMovie: DateReleasesMovie
};
