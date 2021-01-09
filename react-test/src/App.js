import React, { Component } from 'react';
import OldLifeCycle from './components/OldLifeCycle'

// 旧版生命周期lifeCycle

export default class App extends Component {
  state ={
    n:0,
    visable:true,
  } 
  render() {
    const showDom = this.state.visable ?  <OldLifeCycle n={this.state.n}/> : null;
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            visable:!this.state.visable
          })
        }}>是否卸载</button>
        {showDom}
         <button onClick={
           ()=>{
             this.setState({
               n:this.state.n + 1
             })
           }
         }>N+1</button>
      </div>
    )
  }
}
