import React, { Component } from 'react'

export default class RenderProp extends Component {
    state = {
        left: 0,
        top: 0,
    }
    dragRef = React.createRef()
    mouseMoveHandle(e) {
        const { left, top } = this.dragRef.current.getBoundingClientRect();
        this.setState({
            left: e.clientX - left - 25,
            top: e.clientY - top - 25
        })
    }
    render() {
        return (
            <div ref={this.dragRef} className="drag-panel" onMouseMove={this.mouseMoveHandle.bind(this)}>
                {this.props.render && this.props.render(this.state)}
            </div>

        )
    }
}
