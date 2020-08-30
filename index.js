require('./mongoose');
const reMovie = require('./pages/ReleasesMovie');
const rtMovie = require('./pages/RatingMovies');
const { DateReleasesMovie, TopMovie, PopularMovie } = require('./models/Movies');

const urlTop = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';
const urlPopular = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm';

const releasesMovie = async () => {
  try {
    // Crawl data from site
    const movie = await reMovie();
    console.log(movie);

    // Delete movie data before update, because data that i crawled is not the same after each crawling
    // Specifically, there will be movies that are no longer in the top ranking.
    const numberOfDoc = await DateReleasesMovie.countDocuments({ }, (err, count) => count);
    if (numberOfDoc !== 0) {
      await DateReleasesMovie.deleteMany({ }).then((result) => {
        console.log('Data deleted!');
      }).catch((e) => {
        console.log(e);
      });
    }

    // Add data into Database
    insertReleasesDate(movie).then(() => {
      console.log('Added data success!');
    }).catch((e) => {
      console.log(e);
    });
  } catch (e) {
    throw new Error('Crawl data failed!');
  }
};

const ratingMovie = async (url, model) => {
  try {
    // Crawl data from site
    const movie = await rtMovie(url);
    console.log(movie);

    // Delete old data before update new data from IDMb
    const numberOfDoc = await model.countDocuments({ }, (err, count) => count);
    if (numberOfDoc !== 0) {
      await model.deleteMany({ }).then((result) => {
        console.log('Data deleted!');
      }).catch((e) => {
        console.log(e);
      });
    }

    // Add data into database
    insertRatingMovie(model, movie).then(() => {
      console.log('Added data success!');
    }).catch((e) => {
      console.log(e);
    });
  } catch (e) {
    throw new Error('Crawl data failed!');
  }
};

let insertReleasesDate = async (movieList) => {
  for (var i = 0; i < DateReleasesMovie.length; i++) {
    const movie = DateReleasesMovie({
      dateReleases: movieList[i].date,
      name: movieList[i].name
    });

    await movie.save();
  } 
};

let insertRatingMovie = async (model, movieList) => {
  for (var i = 0; i < movieList.length; i++) {
    const movie = model({
      title: movieList[i].title,
      rating: movieList[i].rating
    });

    await movie.save();
  } 
};

releasesMovie();
//ratingMovie(urlPopular, PopularMovie);
//ratingMovie(urlTop, TopMovie);

module.exports = {
  releasesMovie: releasesMovie,
  ratingMovie: ratingMovie
};
