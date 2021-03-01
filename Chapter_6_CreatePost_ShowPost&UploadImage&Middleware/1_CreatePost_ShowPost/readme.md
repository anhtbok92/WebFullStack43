### Xây dựng tính năng tạo mới 1 bài post của trang blog

- Các bước thực hiện
    + B1. Trong thư mục views tạo 1 file mới `create.ejs`
    ```angular2html
        <!-- Main Content -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">        
            <!-- for browser to know tha tthe form contains mutli media. will encripy multie media and send to server -->
            <form action="/posts/store" method="POST">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Title</label>
                  <input type="text" class="form-control" placeholder="Title" id="title" name="title">              
                </div>
              </div>   
              <div class="control-group">
                <div class="form-group floating-label-form-group controls">
                  <label>Content</label>
                  <textarea rows="5" class="form-control" placeholder="Content"  id="body" name="body"></textarea>              
                </div>
              </div>  
              <br>                    
              <div class="form-group">
                <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ```
  
    ```angular2html
    - Giải thích :
       + method="POST" : Khi nhấn nut `Create`, chúng ta sẽ tạo một POST request tới server
       + action="/posts/store" : Tên Router sẽ nhận request
    ```
  
    + B2. Đăng ký 1 router cho việc tạo mới trong index.js
    ```angular2html
    app.get('/posts/new', (req, res) => {
        res.render('create')
    })
    ```
  
    + B3. Thêm menu điều hướng trong `views/layouts/navbar.ejs`
    ```
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/post">Sample Post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/posts/new">New Post</a>
        </li>
      </ul>
    </div>
    ```
  
    + B4. Xử lý khi nhấn submit tạo bài post mới
    ```angular2html
        app.post('/posts/store', (req, res) => {
           console.log(req.body)
            res.redirect('/')
        })
    ```
    ```angular2html
    - Giải thích :
        + Hàm trên lấy dữ liệu từ browser gửi lên thông qua trường `body` của request
        + Node js chưa hỗ trợ bóc tách dữ liệu từ trường `body`
        + Chúng ta cài thêm thư viện `body-parse` để lấy nội dung dễ dàng hơn
        + Cách cài đặt `npm install body-parse`
        + Khai báo sử dụng thư viện trong index.js
        const bodyParser = require('body-parser')
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended:true }))
    ```
    
    + B5. Lưu dữ liệu parse được vào Mongodb
      - Khai báo model
        ```angular2html
            const BlogPost = require('./models/BlogPost.js')
        ```  
      - Lưu dữ liệu vào DB và quay về trang chủ
        ```angular2html
            app.post('/posts/store', (req, res) => {
                // model creates a new doc with browser data
                BlogPost.create(req.body, (error, blogpost) => {
                    res.redirect('/')
                })
            })

        ```
        
### Hiển thị danh sách các bài POST với EJS

- Sử dụng hàm `find` của model để query trong database
```angular2html
app.get('/', (request, response) => {
     BlogPost.find({}, function (error, posts) {
        console.log(posts); // Check kết quả các post trong console.log
     })
})
```

- Truyền dữ liệu lấy được ra ngoài view
```angular2html
app.get('/', (request, response) => {
     BlogPost.find({}, function (error, posts) {
        console.log(posts);
        response.render('index', {
            blogposts: posts
        });
     })
})

```

- Xử lý biến ngoài view để hiển thị data post

```angular2html
<div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <% for (var i = 0; i < blogposts.length; i++) { %>
        <div class="post-preview">
          <a href="/post/<%= blogposts[i]._id %>">
            <h2 class="post-title">
              <%= blogposts[i].title %>
            </h2>
            <h3 class="post-subtitle">
              <%= blogposts[i].body %>
            </h3>
          </a>
          <p class="post-meta">Posted by
            <a href="#"><%= blogposts[i].username %></a>
            on <%= blogposts[i].datePosted.toDateString() %></p>
        </div>
        <hr>
        <% } %>
        <!-- Pager -->
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>
```

### Hiển thị nội dung 1 bài post

Mục đích: Click vào từng bài post, chúng ta sẽ đọc được chi tiết nội dung bài post

- Để biết bài post nào được click, gán ID cho bài viết ở view

```angular2html
<a href="/post/<%= blogposts[i]._id %>">
```

- Xử lý router bài post có ID

```angular2html
app.get('/post/:id', (req, res) => {
     BlogPost.findById(req.params.id, function(error, detailPost){
         res.render('post', {
            detailPost
         })
     })
})
```

- Xử lý data trong view (file post.ejs)

```angular2html
<!-- Page Header -->
  <header class="masthead" style="background-image: url('img/post-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
            <h1><%= detailPost.title %></h1>
            <h2 class="subheading"><%= detailPost.body %></h2>
            <span class="meta">Posted by
              <a href="#"><%= detailPost.username %></a>
              on <%= detailPost.datePosted.toDateString() %></span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Post Content -->
  <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <%= detailPost.body %>
        </div>
      </div>
    </div>
  </article>
```