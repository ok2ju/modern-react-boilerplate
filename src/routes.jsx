import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/Layout';
import About from './components/About';
import NotFound from './components/NotFound';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

