import React, { Component } from 'react';
import { Fragment } from 'redux-little-router';
import Hot from './pages/hot';
import Search from './pages/search';
import Boardgame from './pages/boardgame';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment forRoute="/">
        <div>
          <Fragment forRoute="/">
            <Hot />
          </Fragment>
          <Fragment forRoute="/search">
            <Search />
          </Fragment>
          <Fragment forRoute="/boardgame">
            <Boardgame />
          </Fragment>
        </div>
      </Fragment>
    );
  }
}

export default App;
