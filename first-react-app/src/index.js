import React from 'react';
import ReactDOM from 'react-dom';

let num = 2;
const style = {
  color:"red",
  fontSize:"20px"
}
setInterval(() => {
  num++
  console.log(num)
  ReactDOM.render(<h1 style={style}>{num}</h1>,document.getElementById("root"))
},1000)
ReactDOM.render(<h1>{num}</h1>,document.getElementById("root"))

