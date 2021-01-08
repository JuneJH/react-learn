import React, { Component } from 'react'

export default class NewLifeCycle extends Component {

    state = {
        m: 0,
    }

    // constructor
    constructor(props) {
        super(props);
        console.log("constructor", this.state, this.props, "一个新的组件init ")
    }

    // 属性、状态发生变化 静态函数
    static getDerivedStateFromProps(props,state) { // props:更改后的属性  state:更改后的状态
        console.log("getDerivedStateFromProps",props,state)
        return state
    }
    // 挂载后
    componentDidMount() {
        console.log("compoentDidMount", this.state, this.props)
    }

    // 组件进入活跃状态



    // 优化  传入参数属性,状态
    shouldComponentUpdate(props, state) {   // props:更改后的属性  state:更改后的状态
        console.log("shouldComponentUpdate", this.props, props, "state=>", this.state, state)
        if (state.m === this.state.m && props.n === this.props.n) {
            return false;
        }
        return true;
    }
    // 真实节点更新完成在挂载之前
    getSnapshotBeforeUpdate(props,state){   // props:更改前的属性  state:更改前的状态
        console.log("getSnapshotBeforeUpdate",this.props, props, "state=>", this.state, state)
        return "该参数会传入componentDidUpdate的第三个参数"
    }

    // 更新完成
    componentDidUpdate(preProps, PreState,snap) { // props:更改前的属性  state:更改前的状态
        console.log("componentDidUpdate", this.props, preProps, "state=>", this.state, PreState,"来自getSnapshotBeforeUpdate",snap)
    }

    // 卸载前,清理一些副作用
    componentWillUnmount() {
        console.log("componentWillUnmount", "清理一些副作用操作")
    }




    render() {
        // 生成虚拟dom，准备渲染
        console.log("render", this.state, this.props)
        return (<div>
            <p>状态M:{this.state.m}</p>
            <p>属性N:{this.props.n}</p>
            <button onClick={() => {
                this.setState({
                    m: this.state.m + 1
                })
            }}>M+1</button>
        </div>)
    }
}
