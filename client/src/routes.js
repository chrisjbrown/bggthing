import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Hot from './pages/hot';
import Search from './pages/search';
import Boardgame from './pages/boardgame';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Hot</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Hot}/>
      <Route path="/search" component={Search}/>
      <Route path="/boardgame/:id" component={Boardgame}/>
    </div>
  </Router>
);

export default Routes;