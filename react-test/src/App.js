import React from 'react';
import ReactDOM from 'react-dom';
function ChildA() {
  return (<div>
    <h1>=======ChildA===========</h1>
    <p>childaaaaaaaaa</p>
    <ChildB />
  </div>)
}

function ChildB() {
  return ReactDOM.createPortal((<div>
    <h1>=======ChildB=======</h1>
    <p>childbbbbbbbbb</p>
    <ChildC />
  </div>), document.getElementById("portals"))
}

function ChildC() {
  return (<div>
    <h1>ChildC</h1>
  </div>)
}



function App() {
  return (<div onClick={()=>{console.log("点击了APP")}}>
    <ChildA />
  </div>);
}

export default App;
