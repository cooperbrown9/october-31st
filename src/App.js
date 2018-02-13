import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Home />
    )
    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">Welcome to React</h1>
    //     </header>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //
    //     <div className="wrapper">
    //       <div >1</div>
    //       <div >2</div>
    //       <div >3</div>
    //       <div >4</div>
    //       <div >5</div>
    //       <div >6</div>
    //     </div>
    //
    //   </div>
    // );
  }
}

export default App;
