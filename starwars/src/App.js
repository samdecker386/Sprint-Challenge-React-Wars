import React from 'react';
import './App.css';
// created and imported Characters.js component
import Characters from "./components/Characters";

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>l
      <Characters/>
    </div>
  );
}

export default App;