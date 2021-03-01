### Template engine là gì ?
- Template engine giúp chúng ta có thể thêm logic vào trang HTML, xử lý logic trước khi xuất ra html
- Giúp tái sử dụng những đoạn code sử dụng chung ở các màn hình
- Có 1 template engine rất nhiều người sử dụng : EJS

#### Đặc điểm của template engine

1. Cách cài đặt

```npm install ejs --save```

2. Sử dụng EJS trong dự án

```angular2html
const express = require('express')
const app = new express()
...
const ejs = require('ejs')
app.set('view engine', 'ejs')
```

<i>Chú thích : `app.set('view engine', 'ejs')` thông báo cho express rằng những file có đuôi mở 
rộng là ejs cần phải được render ra HTML

3. Sử dụng EJS trong xử lý router

```angular2html
// Cách xử lý cũ
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

// Cách xử lý mới với EJS
app.get('/', (request, response) => {
    response.render('index')
})
```

<i> Chú thích : với đoạn code trên, Express sẽ tìm kiếm thư mục "views" có file index.ejs hay không
? Nếu có thì generate ra HTML.

### Layout

#### Mục đích
- Để giải quyết vấn đề lặp code quá nhiều khi thiết kế giao diện bằng HTML
<Trang web thường có các thành phần dùng chung như header, footer>
  
- Việc sử dụng thuần HTML khó khăn cho việc tái sử dụng code
- Layout sinh ra để giải quyết 2 khó khăn trên.

#### Cách thực hiện

- Tạo riêng các file : header.ejs, footer.ejs, navbar.ejs
- Include các file trên vào từng page riêng lẻ