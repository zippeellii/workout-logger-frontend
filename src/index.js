import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
require('bootstrap/dist/css/bootstrap.min.css')
require('./App.css')


import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<IndexRoute component={Home} />
    	<Route path="/sign-up" component={Signup} />
    	<Route path="/log-in" component={Login} />
    </Route>
  </Router>
), document.getElementById('root'))
