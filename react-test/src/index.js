import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const container = document.getElementById("root");
document.addEventListener("click", e => {
  console.log("document事件:点击了");
  e.stopPropagation();
})
container.onclick = e => {
  console.log("真实DOM根元素点击事件触发");
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);



