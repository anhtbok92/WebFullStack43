## Giới thiệu

- Trong javascript không có khái niệm class như các ngôn ngữ hướng đối tượng khác
- Để kế thừa trong javascript ta sử dụng khái niệm Prototype

## Prototype là gì ?

- <b>Prototype là cơ chế mà các object trong javascript kế thừa các tính năng từ 1 object khác</b>


## Các đặc điểm của Prototype

- Trong javascript 1 hàm (function) cũng là 1 object. Hàm mặc định có 1 thuộc tính là prototype

```
function Persion(age, name) {
    this.age = age;
    this.name = name;
}
``` 