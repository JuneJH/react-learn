import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import qs from 'query-string'

function A(props) {
  console.log(props);
  return (<div>
    <h1>A页面</h1>
    <button onClick={() => {
      props.history.push("/b?a=1&b=2&c=3#d=4","状态数据")
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
      props.history.goBack();
    }}>跳转A页面</button>
  </div>)
}
export default function App() {
  return (
    <BrowserRouter>
      <Link to="/a">A页面</Link>
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
    </BrowserRouter>
  )
}
