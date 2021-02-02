
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    n:0,
  }
  componentDidMount(){
    this.setState({n:this.state.n + 1},()=>{
      console.log("第一次调用setState")
    });
    console.log("1",this.state.n);    // 0
    this.setState({n:this.state.n + 1},()=>{
      console.log("第二次调用setState")
    });
    console.log("2",this.state.n);    // 0 

    setTimeout(()=>{
      this.setState({n:this.state.n + 1});
      console.log("3",this.state.n)   // 2
      this.setState({n:this.state.n + 1});
      console.log("4",this.state.n)    // 3
    },1000)
  }
  render() {
    return (
      <div>
        {this.state.n}
      </div>
    )
  }
}

