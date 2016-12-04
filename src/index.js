import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './components/Home';
import Signup from './components/Signup';


import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home}/>
    	<Route path="/signup" component={Signup} />
    </Route>
  </Router>
), document.getElementById('root'))
