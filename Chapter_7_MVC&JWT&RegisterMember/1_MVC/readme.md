### Giới thiệu mô hình MVC
- MVC là từ viết tắt của "Model View Controller". 
- Đây là mô hình phân bố source code thành 3 phần, mỗi thành phần có một nhiệm vụ riêng biệt và độc lập với các thành phần khác.
  
- Mô hình MVC được chia làm 3 lớp xử lý gồm Model – View – Controller
    + <b>Model</b> : là nơi chứa những nghiệp vụ tương tác với dữ liệu hoặc hệ quản trị cơ
      sở dữ liệu (mysql, MongoDB… ). Nó sẽ bao gồm các class/function xử lý nhiều
      nghiệp vụ như kết nối, truy vấn, thêm – sửa - xóa cơ sở dữ liệu…
       
    + <b>View</b> : là nới chứa những giao diện như một nút bấm, khung nhập, menu, hình
      ảnh… nó đảm nhiệm nhiệm vụ hiển thị dữ liệu và giúp người dùng tương tác với
      hệ thống.  
      
    + <b>Controller</b> : là nới tiếp nhận những yêu cầu xử lý được gửi từ người dùng, nó sẽ
      gồm những class/ function xử lý nhiều nghiệp vụ logic giúp lấy đúng dữ liệu
      thông tin cần thiết nhờ các nghiệp vụ lớp Model cung cấp và hiển thị dữ liệu đó
      ra cho người dùng nhờ lớp View.