import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        <Routes/>
        <div>
          data provided by <a href="https://boardgamegeek.com/" alt="boardgamegeek">boardgamegeek</a>
        </div>
      </div>
    );
  }
}

export default App;
