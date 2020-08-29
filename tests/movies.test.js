let puppeteer = require('puppeteer');
let browser = null;
let page = null;

describe('Lazada test', () => {

  // Code này được chạy khi bắt đầu chạy unit test
  beforeAll(async() => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 720
    });
  
    // Mặc định, timeout của jest là 5s. 
    // Vì web load có thể lâu nên ta tăng lên thành 60s.
    jest.setTimeout(60000);
  });

  // Đóng trình duyệt sau khi đã chạy xong các test case
  afterAll(async() => {
    await browser.close();
  });

  // Trước khi chạy mỗi test case, vào trang chủ của lazada
  beforeEach(async() => {
    await page.goto('https://www.imdb.com');
  });

  test('Choose menu bar', async() => {
    //expect.assertions(1);
    const hambugerMenu = await page.$('#imdbHeader-navDrawerOpen--desktop');
    await hambugerMenu.click();
    console.log(hambugerMenu.id);
    expect(hambugerMenu.id).toBe('imdbHeader-navDrawerOpen--desktop');

    // Chờ trang load xong, tìm các phần tử item và đếm nếu đủ 40
    //await page.waitForNavigation();
    //const products = await page.$$('div[data-qa-locator=product-item]');
    //expect(products.length).toBe(40);
  });
  
})
