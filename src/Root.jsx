/* @flow */

import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Layout from './components/Layout';

const Root = ({ store }: { store: any }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Layout} />
    </Router>
  </Provider>
);

export default Root;
