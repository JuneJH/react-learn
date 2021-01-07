import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const reactDom = React.createElement("div",{className:"div"},"",React.createElement("p",{style:{color:"yellow"}},"this is p element"),React.createElement("p",{},"this is span element"))

const jsxDom = <div className="div"><p style={{color:"red"}}>this is p element</p><span>this is span element</span></div>
ReactDOM.render(
  <React.StrictMode>
   {reactDom}
  </React.StrictMode>,
  document.getElementById('root')
);

