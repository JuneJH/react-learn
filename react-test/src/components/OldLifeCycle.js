import React, { Component } from 'react';
export default class OldLifeCycle extends Component{
    state ={
      m:0,
    }
    // constructor
    constructor(props){
      super(props);
      console.log("constructor",this.state,this.props,"一个新的组件init ")
    }
  
    // 挂载前
    componentWillMount(){
      console.log("componentWillMount",this.state,this.props)
    }
    // 挂载后
    componentDidMount(){
      console.log("compoentDidMount",this.state,this.props)
    }
  
    // 组件进入活跃状态
  
    // 更新属性前
    componentWillReceiveProps(props){
      console.log("componentWillReceiveProps",this.props,props)
    }
  
    // 优化  传入参数属性,状态
    shouldComponentUpdate(props,state){
      console.log("shouldComponentUpdate",this.props,props,"state=>",this.state,state)
      if(state.m === this.state.m && props.n === this.props.n){
        return false;
      }
      return true;
    }
  
    // 即将更新
    componentWillUpdate(props,state){
      console.log("componentWillUpdate",this.props,props,"state=>",this.state,state)
    }
  
    // 更新完成
    componentDidUpdate(preProps,PreState){
      console.log("componentDidUpdagte",this.props,preProps,"state=>",this.state,PreState)
    }
  
    // 卸载前,清理一些副作用
    componentWillUnmount(){
      console.log("componentWillUnmount","清理一些副作用操作")
    }
  
    
  
  
    render(){
      // 生成虚拟dom，准备渲染
      console.log("render",this.state,this.props)
      return (<div>
              <p>状态M:{this.state.m}</p>
              <p>属性N:{this.props.n}</p>
              <button onClick={()=>{
                this.setState({
                  m:this.state.m + 1
                })
              }}>M+1</button>
          </div>)
    }
  }
  