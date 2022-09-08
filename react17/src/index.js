import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root')
);

window.addEventListener('unmount', function () {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
})