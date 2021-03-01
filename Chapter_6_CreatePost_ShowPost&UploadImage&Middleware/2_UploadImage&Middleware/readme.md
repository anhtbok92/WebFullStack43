### Tạo tính năng Upload image

- Sử dụng thư viện `express-fileupload`

```angular2html
npm install --save express-fileupload
```

- Update file ` views/create.ejs`

```angular2html
<form action="/posts/store" method="POST" enctype="multipart/form-data">
...
<div class="control-group">
 <div class="form-group floating-label-form-group controls">
 <label>Image</label>
 <input type="file" class="formcontrol" id="image" name="image">
 </div>
</div>
<br>
<div class="form-group">
```

<i> Chú thích : enctype="multipart/form-data" - cho browser biết 
form có chứa dữ liệu multimedia. Browser sẽ tự động mã hóa chúng trước khi gửi lên server.

- Xử lý router để lưu ảnh trên server

```angular2html
const fileUpload = require('express-fileupload')
app.use(fileUpload())
...
app.post('/posts/store', (req, res) => {
     let image = req.files.image;
     image.mv(path.resolve(__dirname, 'public/upload, image.name), function (err) {
         // model creates a new doc with browser data
         BlogPost.create(req.body, (error, blogpost) => {
            res.redirect('/')
         })
     })
})

```

<i> Chú thích : ảnh vào thư mục "public/upload" trên server.

- Đồng thời lưu path của ảnh lên Mongodb

```angular2html
const BlogPostSchema = new Schema({
    ...
    image: String
});


app.post('/posts/store', function (req, res) {
     let image = req.files.image;
     image.mv(path.resolve(__dirname, 'public/upload', image.name), function (error) {
         BlogPost.create({
             ...req.body,
             image: '/upload/' + image.name
         }, function (err) {
            res.redirect('/')
         })
     })
})

```

- Hiển thị ảnh đã lưu trên server ra view

```angular2html
<header class="masthead" style="backgroundimage: url('<%= detailPost.image %>')">
```

### Tạo 1 middleware

- Là 1 function cho phép ExpressJS thực hiện công việc sau khi nhận request từ client
- Function này sẽ thực hiện 1 logic trước khi trả về cho client hoặc cho 1 middleware tiếp theo

- Tự tạo 1 middleware

```angular2html
...
const customMiddleWare = (req, res, next) => {
    console.log('Custom middle ware called')
    next()
}
app.use(customMiddleWare)
...

```

++ mỗi lần bạn refresh ứng dụng, message "Custom middle ware called" sẽ được in
trong màn hình console.

++ Hàm next() có mục đích báo cho Express mỗi khi middleware này hoàn thành thì
sẽ tự động chuyển sang thực thi middleware tiếp theo. 

++ Nếu bỏ hàm next() thì ứng dụng sẽ treo vì nó sẽ không biết thực hiện gì tiếp theo 

++ Tất cả những middleware đăng ký với Express thông qua use() đều phải gọi next().

- Tạo và đăng ký Validation middleware

++ Mục đích : Check các field để trống, phải kiểm tra trước khi lưu vào db

```angular2html
...
const validateMiddleWare = (req, res, next) => {
    if (req.files == null || req.body.title == null || req.body.title == null
) {
    return res.redirect('/posts/new')
 }
 next()
}
...

```

++ Sử dụng

```angular2html
app.use('/posts/store', validateMiddleWare)
```