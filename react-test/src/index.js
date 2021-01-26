import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const app = (<div style={{ color: "red" }} className="app">
  <p>我是p元素</p>
  <h1>我是和h1元素</h1>
</div>)
ReactDOM.render(
  app,
  document.getElementById('root')
);

console.log(app)


