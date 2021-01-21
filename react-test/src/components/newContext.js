import React, { Component } from 'react';

const ctx = React.createContext();

export default class NewContext extends Component {
    state = {
        a: 123,
        b: "NewContext"
    }
    changeStateA(){
        this.setState({
            a:this.state.a + 1
        })
    }
    render() {
        return (
            <ctx.Provider value={this.state}>
                <button onClick={this.changeStateA.bind(this)}>修改状态a</button>
                <ChildA />
                <ChildB />
                <ChildC />
            </ctx.Provider>
        )
    }
}


class ChildA extends React.Component {
    static contextType = ctx;

    shouldComponentUpdate(){
        console.log("执行优化")
        return true;
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate")
        return {}
    }
    componentDidUpdate(){
        console.log("更新完成")
    }

    render() {
        console.log("重新渲染???")
        return (
            <div>
                <p>=========ChildA==========</p>
                {/* 函数组件获取上下文,a:{this.context.a}=====b:{this.context.b} */}
                <p>=========END==========</p>
            </div>
        )
    }
}

function ChildB() {

    return (<div>
        <ctx.Consumer>
            {context => (
                <div>
                    <p>=========ChildB==========</p>
                 函数组件获取上下文,a:{context.a}=====b:{context.b}
                    <p>=========END==========</p>
                </div>
            )}
        </ctx.Consumer>
    </div>)
}

class ChildC extends Component {


    render() {
        return (<ctx.Consumer>
            {
                context => (
                    <div>
                        <p>=========ChildC==========</p>
                     函数组件获取上下文,a:{context.a}=====b:{context.b}
                        <p>=========END==========</p>
                    </div>
                )
            }
        </ctx.Consumer>)
    }
}
