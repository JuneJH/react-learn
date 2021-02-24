import React from 'react';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import qs from 'query-string';
import "./app.css"

function A(props) {
  console.log(props);
  return (<div>
    <h1>A页面</h1>
    <button onClick={() => {
      props.history.push("/b?a=1&b=2&c=3#d=4", "状态数据")
    }}>跳转B页面</button>
  </div>)
}

function B(props) {
  console.log(props);
  const params = qs.parse(props.location.search);
  console.log(params)
  return (<div>
    <h1>B页面</h1>
    <button onClick={() => {
      props.history.push("/c");
    }}>跳转C页面</button>
  </div>)
}

function C() {
  return <div>
    <Link to="/a">跳转A页面</Link>
  </div>
}

// function MyLink(props){
//   return <a href={props.to} onClick={e=>{
//     e.preventDefault();
//     props.history.push(props.to);
//   }}>{props.children}</a>
// }
// const MyLinkW = withRouter(MyLink)
export default function App() {
  return (
    <BrowserRouter>
      <NavLink to="/a">A页面</NavLink>
      <Switch>
        {/* <Route path="/a" component={A} /> */}
        <Route path="/b" component={B} />
        <Route path="/c" component={C} />
        <Redirect from="/a" to="/b">重定向</Redirect>
      </Switch>
    </BrowserRouter>
  )
}
