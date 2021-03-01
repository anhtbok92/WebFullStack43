### Có 2 loại package trong NodeJs : build in nodejs và third party
+ Build in library : http, fs...
+ Third Party : tìm kiếm trong trang npmjs.com

### Cài đặt Express
- `npm install express`
- Cần phải tạo file package.json
- Package.json : Là file cấu hình của dự án
- Nếu gõ `npm instal express` mà không có file package.json thì sẽ gặp lỗi
```
no such file or directory, open ...package.json
```
- Dependencies : sẽ chứa tên của pagekage cùng version lúc cài đặt
- Folder node_module
    + Chứa rất nhiều thư viện khác
    + Do express sử dụng nhiều dependencies khác nữa
    + Không sửa code trong thư mục node_modules
    
### Giới thiệu Express

- Tại sao phải sử dụng express
    + Sử dụng express nhìn code ngắn gọn hơn
    ```
        // không sử dụng express
        const http = require('http');
        
        const server = http.createServer((request, response) => {
            console.log("Xin chao cac ban")
        })
        server.listen(3000)
    ```
  
    ```
        // Sử dụng express
        const express = require('express')
        const app = express()
        app.listen(3000, () => {
            console.log("Toi dang lang nghe tren port 3000")
        })
    ```
  
- Xử lý request với express
    + Cho phép xử lý linh hoạt với các method từ client 'GET', 'POST', trả về dạng json, dễ dàng xây dựng API
    + Ví dụ
    ```
        const express = require('express')
        const app = express()
        app.listen(3000, () => {
            console.log("Toi dang lang nghe tren port 3000")
        })
  
        app.get("/", (request, reponse) => {
            response.json({
                name: "Nguyễn Tuấn Anh",
                age: "29",
                website: "vnlab"
            })
        })
    ```
  
    + Định nghĩa được các router cụ thể -> Đây gọi là `ROUTING` <hiểu đơn giản là cách quy ước phần xử lý với 1 URL cụ thể nào đó>
    ```
        app.get("/about", (request, reponse) => {
            response.json({
                name: "Nguyễn Tuấn Anh",
                age: "29",
                website: "vnlab"
            })
        })
    ```
  
- Xử lý bất đồng bộ với Callback
    + Khái niệm về đồng bộ : Hàm viết sau sẽ đợi hàm viết trước hoàn thành
    + Ví dụ : các hàm trong PHP sẽ thực hiện theo thứ tự
    `Task 1 -> Task 2 -> Task 3 -> Task 4 -> Completion`
      Nếu task 1 quá lâu, thì các task sau sẽ không được thực hiện và nhiệm vụ không thể hoàn thành
      
    + Với Nodejs thì khác : Cho phép các hàm được thực hiện bất đồng bộ, hàm sau không cần đợi hàm trước thực hiện xong
    Tất cả đưa vào 1 queue, cái nào xong trước thì thông báo
    ```
        // task 1
        app.get('/', (req, res) => {
            // get record in database
        });
  
        // task 2 
        app.get('', (req, res) => {
           res.sendFile(path.resolve(__dirname, 'about.html'))
        })
    ```

- Trả 1 file html cho client
    + Trong express sử dụng sendFile function.
    + Cách làm:
    ```
        app.get('/about', (request, response) => {
            res.sendFile(path.resolve(__dirname, 'about.html'))
        })
  
         app.get('/contact', (request, response) => {
            res.sendFile(path.resolve(__dirname, 'contact.html'))
        })
    ```
- Trả về static resource (html,css,js...) cho client
    + Các ứng dụng web thường sử dụng images, css, js để định dạng và trang trí cho website
    + Tất cả các tài nguyên trên server thông thường phải được bảo mật, phải có quyền truy cập vào server
    hoặc ít nhất phải thông qua router mới được truy cập
      
    + Giải pháp phổ biến: Tạo 1 thư mục public, chỉ cần biết đường dẫn, ai cũng có thể truy cập được, dù ở đâu.
    + Code:
    ```
        const express = require('express')
        const app = express()
        const path = require('path')
  
        app.use(express.static('public'))
        app.listen(3000, () => {
            console.log('website listening on port 3000')
        })
    ```