import React, { Component } from 'react';
import { PropTypes } from "prop-types";

const types = {
    a: PropTypes.number,
    b: PropTypes.number,
    change: PropTypes.func,
}

export default class OldContext extends Component {
    static childContextTypes = types;
    componentDidMount() {
        console.log("componentDidMount")
    }
    state = {
        a: 1
    }
    getChildContext() {
        console.log("getChildContext")
        return {
            a: this.state.a,
            b: 321,
            change: newValue => {
                this.setState({
                    a: this.state.a + 1
                })
            }
        }
    }
    render() {
        console.log("render")
        return (
            <div>
                <ChildA />

                <p>==============函数组件=========</p>
                <ChildC />
            </div>
        )
    }
}

function ChildA() {
    return <div>
        <h1>this is Child A!!!</h1>
        <p>================END=============</p>
        <ChildB />
    </div>

}

class ChildB extends Component {
    static childContextTypes = types;
    static contextTypes = types;
    getChildContext(){
        return{
            a:123,
            b:123,
            change:()=>{
                alert("就近原则")
            }
        }
    }
    render() {
        return (
            <div>
                <h1>this is ChildB</h1>
                <p>获取上下文数据:a:{this.context.a}</p>
                <button onClick={() => {
                    this.context.change();
                }}>类组件组件修改上下文 + 1</button>
                <p>ChildB 调用C</p>
                <ChildC/>
            </div>
        )
    }
}



function ChildC(props, context) {
    return (<div>
        <h1>this is Child C</h1>
        <p>函数组件获取上下文a:{context.a}</p>
        <button onClick={() => {
            context.change();
        }}>函数组件修改上下文 + 1</button>
    </div>)
}
ChildC.contextTypes = types
