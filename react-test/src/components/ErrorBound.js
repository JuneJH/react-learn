import React, { Component } from 'react'

export default class ErrorBound extends Component {
    state = {
        isError :false,
    }
    // 发送错误之后，更新之前  用于真正处理错误
    static getDerivedStateFromError(){
        console.log("监听到渲染时错误")
        return {
            isError:true,
        }
    }

    // 发生错误之后，更新之后 记录日志
    componentDidCatch(error,info){
        console.log(info)
        this.setState({
            isError:true,
        })
    }

    render() {
        if(this.state.isError){
            return <div style={{color:'#f40'}}>组件发生了错误</div>
        }

        return this.props.children
    }
}

// getDerivedStateFromError 

// componentDidCatch

// 都不会处理异步得错误，事件监听错误，本身错误