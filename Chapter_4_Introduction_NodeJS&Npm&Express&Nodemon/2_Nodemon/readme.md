### Tự động khởi động server mỗi khi thay đổi source code
- Bất tiện khi thay đổi source code phải stop/start server
- Cài thư viện theo dõi thay đổi source code : forever, nodemon...

- Cài đặt nodemon
```npm install nodemon --save-dev```
  + `--save`: mục đích sau khi cài xong vào node_module, cũng thêm vào file package.json
               sau này ng khác muốn cài chỉ cần gõ `npm install` sẽ tự động cài
    
  + `-dev`: có 2 loại thư viện : hỗ trợ dev, nhưng trên product không cần
            Ví thế trên package.json có 2 phần `dependencies` và `devDependencies`
            -dev để thêm vào  `devDependencies`
    
- Khởi động server bằng lệnh `npm start`
  + Trong package.json thêm
    ```
        "script": {
            "start": "nodemon index.js"
        }
    ```
    
   + Mỗi khi khởi động lại server chỉ cần gõ `npm start`
    

- Download template của web blog
   + Link : https://startbootstrap.com/themes/clean-blog/
   + Đăng ký thư mục public ```app.use(express.static('public'))```
   + Copy những file index.html, about.html, contact.html, post.html vào public folder
   + Copy những folder css, img, js, vendor vào thư mục public
    
- Thực hiện chuyển trang thông qua Router
  + Để có thể xử lý logic trước khi trả về cho client <nếu như cũ chỉ là trang tĩnh thôi>
  + Code:
    ```
        const express = require('express')
        const app = new express()
    
        const path = require('path')
        ...
        app.get('/', (request, response) => {
            response.sendFile(path.resolve(__dirname, 'pages/index.html'))
        })
    ```
  + Giờ cứ mỗi lần truy cập vào '/' thì trang index.html sẽ được trả về  