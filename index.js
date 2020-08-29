const reMovie = require('./pages/ReleasesMovie');
const rtMovie = require('./pages/RatingMovies');

const urlTop = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';
const urlPopular = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm';

const releasesMovie = async () => {
  try {
    const movie = await reMovie();
    //console.log(movie);
    return movie;
  } catch (e) {
    throw new Error('Crawl data failed!');
  }
};
releasesMovie();

//const movie = ratingMovie(urlTop);
//movie.then(() => console.log(movie));
const ratingMovie = async () => {
  try {
    const movie = await rtMovie(urlTop);
    console.log(movie);
    return movie;
  } catch (e) {
    throw new Error('Crawl data failed!');
  }
};
//ratingMovie(urlPopular);
//const data = ratingMovie();

module.exports = {
  releasesMovie: releasesMovie,
  ratingMovie: ratingMovie
};
