import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import "./css/index.css"
import App from './App';
import reportWebVitals from './reportWebVitals';


// const greeting = <h1>Hello, world</h1>
// const ele = React.createElement("h1",{},"Hello, world")
// const ele2 = React.createElement("div",{id:"root1",className:"one two three"},ele)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
