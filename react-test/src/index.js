import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// 字符串方式
// class A extends React.Component{

//   constructor(props){
//     super(props);
//     console.log("constructor",this.refs.A)
//   }

//   componentWillMount(){
//     console.log("componentWillMount",this.refs.A)
//   }

//   componentDidMount(){
//     console.log("componentDidMount",this.refs.A)
//   }

//   render(){
//     console.log("render",this.refs.A)
//     return (
//       <div ref="A">
//         <h1>this is A</h1>
//       </div>
//     )
//   }
// }

// class A extends React.Component{

//   constructor(props){
//     super(props);
//     this.ARef = React.createRef();
//     console.log("constructor",this.ARef)
//   }

//   componentWillMount(){
//     console.log("componentWillMount",this.ARef)
//   }

//   componentDidMount(){
//     console.log("componentDidMount",this.ARef)
//   }

//   render(){
//     console.log("render",this.ARef)
//     return (
//       <div ref={this.ARef}>
//         <h1>this is A</h1>
//       </div>
//     )
//   }
// }

// class A extends React.Component {

//   constructor(props) {
//     super(props);
//     this.ARef = { current: null }
//     console.log("constructor", this.ARef)
//   }

//   componentWillMount() {
//     console.log("componentWillMount", this.ARef)
//   }

//   componentDidMount() {
//     console.log("componentDidMount", this.ARef)
//   }


//    // 即将更新
//    componentWillUpdate(props,state){
//     console.log("componentWillUpdate",this.ARef)
//   }

//   componentDidUpdate(preProps,PreState){
//     console.log("componentDidUpdate",this.ARef)
//   }


//   reRender() {
//     this.setState({})
//   }

//   render() {
//     console.log("render", this.ARef)
//     return (
//       <div ref={ref => {
//         console.log("runRef", ref)
//         this.ARef.current = ref 
//       }}>
//         <h1>this is A</h1>
//         <button onClick={this.reRender.bind(this)}>刷新</button>
//       </div>
//     )
//   }
// }


// function A (props,ref){
//   console.log("转发的ref",ref)
//   return (<div ref={ref}>
//     <h1>this is A!!!</h1>
//   </div>) 
// }

class A extends React.Component {

  render() {
    return (<div ref={this.props.myRef}>
      <h1>this is class A!!!</h1>
    </div>)
  }
}

// 通过React.forwardRef转发,得到一个新的组件
const NewA = React.forwardRef((props,ref)=>{
  return <A {...props} myRef={ref} />
})
class App extends React.Component {
  Aref = React.createRef();
  componentDidMount() {
    console.log("获取ref", this.Aref)
  }

  render() {
    return <NewA ref={this.Aref} />
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

