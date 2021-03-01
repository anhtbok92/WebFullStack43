### Scope trong javascript - Phạm vi truy cập
https://viblo.asia/p/scope-trong-javascript-RQqKLnW6l7z
- Scope là gì?
    + Scope nói đến phạm vi hoạt động của các variable/function
    + Hiểu về scope sẽ giúp code dễ debug hơn, dễ maintain hơn
- Global scope
    + Là phạm vi toàn cục (global)
    + Biến đó nằm trong file javascript
- Local scope
    + Khi định nghĩa 1 function
    + Và tạo các biến bên trong function đó => Các biến này được gọi là biến cục bộ (local)
    
```angular2svg
// Scope A: in here : global scope bên ngoài phạm vi hàm
var myFunction = function () {
  // Scope B: in here : là local scope nằm trong phạm vi hàm myFunction
  var name = 'Anh';
  console.log(name); // Anh
};

// Uncaught ReferenceError: name is not defined
console.log(name);
```
+ Ví dụ trên biến name thuộc phạm vi function scope nên không thể được truy cập bởi scope cha

### Closure trong javascript
### Phân biệt var,let,const
### Hoisting trong javascript
### Higher Order Function JavaScript
### Module system