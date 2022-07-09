import React, { useState } from 'react';
import logo from './cat.jpg';
import './App.css';

function App() {
  // useState keeps an internal state in the component
  const [count, setCount] = useState(0);

function backToZero(){
  if (count >= 5) {
    setCount(0);
    return;
  }
  setCount(count+1);
}



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You clicked {count} times</p>
        <button onClick={() => backToZero()}>
          Click me

        </button>
      </header>
    </div>
  );
}

export default App;
//kitty logo
//count by 1 and every 5th click count back 5, 01230 etc

//if(count > 4){
// count = 0

//}
//text filed above or beside button inside user enter number 1-10 then genrate a random number based on what they chose (ex 1 = 1-9, 2 =10-99 etc)
