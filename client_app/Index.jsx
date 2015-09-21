import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';

React.render((
  <Router>
    <Route path='/' component={App} />
  </Router>
), document.body);
