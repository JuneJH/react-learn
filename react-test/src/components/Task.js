import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./index.css"

// export default class Task extends PureComponent {
//     static propTypes = {
//         taskName:PropTypes.string,
//         isFinish:PropTypes.bool,
//     }
//     // shouldComponentUpdate(nextProps){
//     //     if(nextProps.taskName === this.props.taskName && nextProps.isFinish === this.props.isFinish){
//     //         return false;
//     //     }
//     //     return true;
//     // }
//     render() {
//         console.log("Task 重新渲染")
//         return (
//             <li className={this.props.isFinish ? "finish":""}>{this.props.taskName}</li>
//         )
//     }
// }

 function Task(props){
    console.log("Task 重新渲染")
    return (
        <li className={props.isFinish ? "finish":""}>{props.taskName}</li>
    )
}

function memo(Comp){
    return class extends PureComponent{

        render(){
            return <Comp {...this.props}/>
        }
    }
}

export default memo(Task)
