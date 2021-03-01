import './App.css';
// import ClothesComponent from "./components/ClothesComponent";

// Example using props

// function App() {
//   return (
//     <div className="App">
//       <ClothesComponent name="Quần jean" type="Skinny" color ="Đen" size = "L">Clothes 1</ClothesComponent>
//       <ClothesComponent name="Váy" type="váy công chúa" color ="Trắng" size = "M">Clothes 2</ClothesComponent>
//     </div>
//   );
// }
//
// export default App;


// Example using state
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { index: 1 };
    }

    addition() {
        this.setState({
            index: this.state.index + 1
        });
    }

    minus() {
        this.setState({
            index: this.state.index -1
        })
    }

    render() {
        return (
            <div>
                <p>Giá trị {this.state.index}</p>
                <button onClick={() => this.addition()}>
                    Tăng
                </button>
                <button onClick={() => this.minus()}>
                    Giảm
                </button>
            </div>
        );
    }
}
export default App;