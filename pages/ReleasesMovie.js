const puppeteer = require('puppeteer');

const movies = async () => {
  const browser = await puppeteer.launch();
  //console.log('Browser openned');
  const page = await browser.newPage();
  const url = 'https://www.imdb.com/calendar?region=VN&ref_=rlm';
  await page.goto(url);
  //console.log('Page loaded');

  const articles = await page.evaluate(() => {
    let listMovies = document.querySelectorAll('#main > *');
    listMovies = [...listMovies];

    let articles = [];
    for (var i = 0; i < listMovies.length; i+=2) {
      let date = listMovies[i].outerText;
      let name = listMovies[i + 1].outerText;

      articles.push({ date, name });
    }

    return articles;
  });

  if (articles.length === 0) throw new Error();
  await page.close();
  await browser.close();
  return articles;
};

module.exports = movies;
