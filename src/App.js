import logo from './logo.svg';
import { useEffect } from "react";
import './App.css';
import ApiCall from './components/ApiCall'

function App() {
  fetch('https://rebrickable.com//api/v3/lego/sets//?key=d2f2a1ef3260ceb4b63aa6bf03c1e9f9')
  .then((response) => response.json())
  .then((data) => console.log(data));
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ApiCall/>
    </div>
  );

}

export default App;
