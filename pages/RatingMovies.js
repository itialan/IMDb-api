const puppeteer = require('puppeteer');

const movies = async (url) => {
  const browser = await puppeteer.launch();
  console.log('Browser openned');
  const page = await browser.newPage();
  await page.goto(url);
  console.log('Page loaded');

  const articles = await page.evaluate(() => {
    let lister = document.querySelectorAll('.lister-list > tr');
    lister = [...lister];
    let articles = lister.map(movie => ({
      title: movie.children[1].outerText,
      rating: movie.children[2].outerText
    }));

    return articles;
  });

  //console.log(articles);
  await browser.close();
  return articles;
};

module.exports = movies;
