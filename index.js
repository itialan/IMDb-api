const puppeteer = require('puppeteer');
const download = require('image-downloader');

(async() => {
  const browser = await puppeteer.launch({ headless: false });
  console.log('Browser openned');
  const page = await browser.newPage();
  const urlTopRating = 'https://www.imdb.com/chart/top/?ref_=nv_mv_250';
  const url = 'https://www.imdb.com';
  await page.goto(url);
  console.log('Page loaded');

  /*
  const articles = await page.evaluate(() => {
    let lister = document.querySelectorAll('.lister-list > tr');
    lister = [...lister];
    let articles = lister.map(movie => ({
      title: movie.children[1].outerText,
      rating: movie.children[2].outerText
    }));

    return articles;
  });
  */

  await page.click('#imdbHeader-navDrawerOpen');

  //console.log(articles);
  //await browser.close();
})();
