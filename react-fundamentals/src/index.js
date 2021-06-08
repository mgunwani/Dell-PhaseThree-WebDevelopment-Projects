import React from 'react';
import ReactDOM from 'react-dom';
import Main from "./components/Main";
import Employees from "./components/Employees";

ReactDOM.render(
  <React.StrictMode>
    <Employees />
  </React.StrictMode>,
  document.getElementById('root')
);