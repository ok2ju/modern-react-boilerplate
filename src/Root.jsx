/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Layout from './components/Layout';
import About from './components/About';
import NotFound from './components/NotFound';

const Root = ({ store }: { store: any }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <Route path="about" component={About} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

export default Root;
