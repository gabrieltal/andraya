import React from 'react';
import ReactDOM from 'react-dom';
import './assets/stylesheets/reset.css';
import './assets/stylesheets/app.css';
import './assets/stylesheets/stars.css';
import Main from './components/Main';
import Timeline from './components/Timeline';

import reportWebVitals from './library/reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
