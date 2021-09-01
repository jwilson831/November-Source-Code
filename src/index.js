import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

ReactDOM.render(
  <BrowserRouter>
    <Protect sha512="3f17d2371f696e113a21a2b23ce3361c77153e753440f84125b19a183d859e25e23e1eef08cd3659221f5c80a695b5946ab215d20794c5520d8df76f48e2ba50">
      <App/>
    </Protect>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
