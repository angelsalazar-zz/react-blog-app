import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

require('./scss/app.scss');
import store from './store';

import Layout from './components/Layout.js';


const app = document.getElementById('app');

ReactDOM.render(
  <Layout />,
  app
);
