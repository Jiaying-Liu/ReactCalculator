import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
//import ResultBar from './components/result_bar';
import Calculator from './components/calculator';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
