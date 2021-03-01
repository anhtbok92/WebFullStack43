import logo from './logo.svg';
import './App.css';

import FunctionComponent from "./components/functionComponent";
import ClassComponent from "./components/classComponent";

import FunctionComponentWithProps from "./components/functionComponentWithProps";
import ClassComponentWithProps from "./components/classComponentWithProps";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload 12345.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionComponent />
        <ClassComponent />
        <FunctionComponentWithProps name={"Tuấn Anh"} age={"18"} />
        <ClassComponentWithProps name={"Hoang Thuy Linh"} age={"18"} />
      </header>
    </div>
  );
}

export default App;
