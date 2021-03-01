import './App.css';
import React, { useState } from 'react';

// Example 1
// function App() {
//     const [count, setCount] = useState(0);
//     const handleChangeCount = () => {
//         setCount(count + 1);
//     }
//     return (
//         <div>
//             <p>Bạn đã click {count} lần</p>
//             <button onClick={handleChangeCount}>
//                 Click vào đây
//             </button>
//         </div>
//     );
// }

function App() {
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
            <p>Bạn {state.name}, tuổi : {state.age} đã click {state.count} lần</p>
            <button onClick={handleChangeCount}>
                Click vào đây
            </button>
        </div>
    );
}

export default App;
