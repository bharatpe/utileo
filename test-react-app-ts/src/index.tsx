import './index.css';
import 'bharat-ui-turbo/web/styles.min.css';

import React from 'react';
import ReactDOM from 'react-dom';

import ThemeProvider from 'bharat-ui-turbo/web/ThemeProvider';

import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
