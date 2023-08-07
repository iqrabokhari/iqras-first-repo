import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Store from "./App/Store.js"; // Make sure this path is correct
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
