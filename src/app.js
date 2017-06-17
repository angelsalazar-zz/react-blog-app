import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

require('./scss/app.scss');

import store from './store';
import Layout from './components/Layout.js';


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
  app
);
