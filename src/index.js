import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './redux/store';
import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://127.0.0.1:8000';
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
