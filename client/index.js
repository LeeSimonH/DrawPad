/**
 * ************************************
 *
 * @module  index.js
 * @author Simon Lee
 * @date 4/19/2022
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // wrap the App in the Provider Component and pass in the store
  document.getElementById('contents')
);
