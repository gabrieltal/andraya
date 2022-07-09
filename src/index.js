import React from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';
import './assets/stylesheets/stars.css';

import reportWebVitals from './library/reportWebVitals';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
