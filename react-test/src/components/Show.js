import React, { Component } from 'react'

export default class Show extends Component {
    state = {
        left:0,
        top:0,
    }
    dragRef = React.createRef()
    mouseMoveHandle(e){
        const {left,top} = this.dragRef.current.getBoundingClientRect();
        this.setState({
            left:e.clientX - left - 25,
            top:e.clientY - top - 25
        })
    }
    render() {
        return (
            <div ref={this.dragRef} className="drag-panel" onMouseMove={this.mouseMoveHandle.bind(this)}>
                <h1>left:{this.state.left} top:{this.state.top}</h1>
            </div>
        )
    }
}
