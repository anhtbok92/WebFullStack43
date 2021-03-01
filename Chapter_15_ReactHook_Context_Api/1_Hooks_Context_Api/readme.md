## React Hooks

### 1. Nhắc lại functional component và class component

- Hạn chế của Functional Component
    + Không có state
    + Không có life-cycle method...
    
- Ưu điểm của Functional Component
    + Dễ unit test
    + Phù hợp những người thích viết code theo kiểu function, không thích kiểu OOP
    
- React Hooks ra đời để khắc phục các nhược điểm của Functional Component
    + React Hooks cho phép chúng ta sử dụng state mà không cần dùng đến class
    + Cung cấp hàm thay thế các hàm life cycle của Class Component
    
### 2. React Hooks

- 2 điểm cần quan tâm khi nhắc đến React Hooks là : <b>state</b> và <b>life cycle methods</b>

#### 2.a Khởi tạo State bằng Hook

- Xét ví dụ 1: Khởi tạo và sử dụng state trong Class Component

```angular2svg
class HookExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    handleChangeCount = () => {
        this.setState({ count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <p>Bạn đã click {this.state.count} lần</p>
                <button onClick={handleChangeCount}>
                Click vào đây
                </button>
            </div>
        );
    }
}
```

- Xét ví dụ 2: Khởi tạo và sử dụng state trong Functional Component - Có sự hỗ trợ của Hooks

```angular2svg
import React, { useState } from 'react';
function HookExample() {
    const [count, setCount] = useState(0);
    const handleChangeCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Bạn đã click {count} lần</p>
            <button onClick={handleChangeCount}>
                Click vào đây
            </button>
        </div>
    );
}
```

- Giải thích:
    + Ví dụ trên đang sử dụng 1 Hook tên là `useState`
    + `useState` sử dụng để khởi tạo state và cập nhật state
    + `useState` trả về 1 cặp gồm 2 biến
        + `count` : giá trị hiện tại của state
        + `setCount` : Hàm để cập nhật state
        + `useState(0)` : Giá trị mặc định của state
    
- Nếu cần khai báo nhiều state ta có thể sử dụng như sau

```angular2svg
const [count, setCount] = useState(0);
const [name, setName] = useState('Nguyen Tuan Anh');
const [age, setAge] = useState(30);
```

- Nếu có quá nhiều state thì cách trên không phải là giải pháp tối ưu.
Cách dưới đây sẽ gom nhiều state thành 1
  
```angular2svg
import React, { useState } from 'react';
function HooksExample() {
    const [state, setState] = useState({
        count: 0,
        name:'Nguyen Tuan Anh',
        age: 30
    });

    const handleChangeCount = () => {
        setState({
            count: state.count +1,
            name: "Hoang Thuy Linh",
            age: 18
        });
    }

    return (
        <div>
            <p>Bạn đã click {count} lần</p>
            <button onClick={handleChangeCount}>
            Click vào đây
            </button>
        </div>
    );
}
```

#### 2.b Sử dụng Hook thay thế life-cycle methods

- Nhắc lại các function life-cycle trong Class Component
    + componentDidMount()
    + componentDidUpdate()
    + componentWillUnmount()
    + vv..
    
- Tất cả các hàm trên được thay thế bằng 1 hook duy nhất : `useEffect()`

- <b>componentDidMount()</b>

```angular2svg
useEffect(() => {
    // Bạn viết code xử lý logic tại đây
}, []);
```
    + Cách viết này tương tự hàm componentDidMount()
    + Được gọi 1 lần khi component được mounted
    + Tham số thứ 2 : [] - khiến useEffect chạy đúng 1 lần

- <b>componentDidUpdate()</b>

```angular2svg
useEffect(() => {
    // Bạn viết code xử lý logic tại đây
});
```
    + Cách viết này tương tự hàm componentDidUpdate()
    + Không truyền tham số thứ 2 trong hàm useEffect()
    + Đoạn code bên trong sẽ chạy mỗi khi component được render

- <b>componentWillUnMount</b>

```angular2svg
useEffect(() => {
    // hàm được trả về sẽ được gọi khi component unmount
    return () => {
        // Bạn viết code xử lý logic tại đây khi component unmount.
    }
}, [])
```
    + Cách viết này tương tự hàm componentWillUnMount()
    + Hook useEffect() sẽ return 1 function, hàm return sẽ có tác dụng tương tự như hàm componentWillUnMount


#### 2.c Một số hook nâng cao (ít sử dụng)

- useReducer()
- useMemo()
- useCallback()
- <b>useContext()</b>
- useRef()
- useLayoutEffect()
- useDebugValue()
- useImperativeHandle()

### 3. Bài tập làm trên lớp

- Sử dụng kiến thức về React Hook load thông tin user, posts, todos từ API
  ```angular2svg
    users: https://jsonplaceholder.typicode.com/users
    posts: https://jsonplaceholder.typicode.com/posts
    todos: https://jsonplaceholder.typicode.com/posts
  ```
  
- Thiết kế ứng dụng có 3 button
  