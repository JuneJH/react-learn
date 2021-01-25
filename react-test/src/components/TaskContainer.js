import React, { Component } from 'react';
import Task from './Task';
import AddTask from './AddTask'

export default class TaskContainer extends Component {
    state = {
        taskList: [],
    }
    componentDidMount() {
        const newArr = []
        for (let i = 0; i < 10; i++) {
            newArr.push({
                taskName: "任务" + i,
                isFinish: Math.random() > 0.5 ? true : false
            })
        }
        this.setState({
            taskList: [...newArr]
        })
    }
    addTask(newArr) {
        this.setState({
            taskList: [...this.state.taskList, newArr]
        })
    }
    render() {
        console.log("TaskContainer 重新渲染")
        const ts = this.state.taskList.map(it => <Task key={it.taskName} {...it} />)
        return (
            <ul>
                <AddTask addTask={this.addTask.bind(this)}/>
                {ts}
            </ul>
        )
    }
}
