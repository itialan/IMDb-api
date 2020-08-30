Project này có mục đích là crawl data từ trang IMDb (là một trang cơ sở dữ liệu trực tuyến về điện ảnh thế giới).

Trong đây có sử dụng Puppeteer để crawl data, lấy dữ liệu của 3 mục nằm trong phần Movie (top rates, releases date, most popular).

Sau khi clone project về rồi thì phải cài đặt các thư viện cần thiết để có thể chạy được

### `npm i puppeteer`
### `npm i mongoose`

Hiện tại, do mình chỉ đang làm tới phần crawl data từ IMDb và lưu xuống database (MongoDb) thôi nên các bạn có thể bỏ qua thư mục test nhé...

Để start project thì chạy lệnh 

```
node index.js
```

Updating....
