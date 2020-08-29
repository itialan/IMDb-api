const releasesMovie = require('./pages/ReleasesMovie');
const ratingMovie = require('./pages/RatingMovies');

const urlTop = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';
const urlPopular = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm';

//releasesMovie();
ratingMovie(urlPopular);


