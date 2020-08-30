require('./mongoose');
const reMovie = require('./pages/ReleasesMovie');
const rtMovie = require('./pages/RatingMovies');
const { TopMovie, PopularMovie } = require('./models/TopMovies');

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
//releasesMovie();

//const movie = ratingMovie(urlTop);
//movie.then(() => console.log(movie));
const ratingMovie = async () => {
  try {
    const movie = await rtMovie(urlTop);
    insert(PopularMovie, movie);
  } catch (e) {
    throw new Error('Crawl data failed!');
  }
};
ratingMovie(urlPopular);
//const data = ratingMovie();

// TODO: viết hàm insert database 
let insert = async (model, movieList) => {
  for (var i = 0; i < movieList.length; i++) {
    console.log(movieList[i].title);
    console.log(movieList[i].rating);

    const movie = model({
      title: movieList[i].title,
      rating: movieList[i].rating
    });
    await movie.save();
  } 
};

module.exports = {
  releasesMovie: releasesMovie,
  ratingMovie: ratingMovie
};
