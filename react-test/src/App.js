
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    n:0,
  }
  componentDidMount(){
    this.setState({n:this.state.n + 1});
    console.log("1",this.state.n);
    this.setState({n:this.state.n + 1});
    console.log("2",this.state.n);

    setTimeout(()=>{
      this.setState({n:this.state.n + 1});
      console.log("3",this.state.n)
      this.setState({n:this.state.n + 1});
      console.log("4",this.state.n)
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

