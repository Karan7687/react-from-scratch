// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import './index.css';  // optional, for styling

// const container = document.getElementById('root');
// const root = createRoot(container);  // create a root
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client"; //import createroot
import App from "./App";

import "./index.css";

const container = document.getElementById("root"); //get the html element div id="root"

const root = createRoot(container); //function call and pass container with html root.

// Render the App component inside the root element
root.render(<App />);
 
 

