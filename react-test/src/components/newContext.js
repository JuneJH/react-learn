import React, { Component } from 'react';

const ctx = React.createContext();

export default class NewContext extends Component {
    state = {
        a: 123,
        b: "NewContext"
    }
    render() {
        return (
            <ctx.Provider value={this.state}>
                <ChildA />
                <ChildB />
                <ChildC />
            </ctx.Provider>
        )
    }
}


class ChildA extends React.Component {
    static contextType = ctx;

    render() {
        console.log(this)
        return (
            <div>
                <p>=========ChildA==========</p>
                函数组件获取上下文,a:{this.context.a}=====b:{this.context.b}
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
