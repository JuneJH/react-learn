import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class AddTask extends Component {
    state = {
        taskName:""
    }
    static propTypes = {
        addTask:PropTypes.func
    }
    changeInput(e){
        this.setState({
            taskName:e.target.value
        })
    }
    addTask(){
        this.props.addTask && this.props.addTask({taskName:this.state.taskName,isFinish:false})
    }
    render() {
        return (
            <div>
                <input value={this.state.taskName} onChange={this.changeInput.bind(this)}/>
                <button onClick={this.addTask.bind(this)}>add Task</button>
            </div>
        )
    }
}
