import React, { Component } from 'react'

// export default class Select extends Component {

//     changeCheck(e){
//         this.props.onChange(e.target.value,this.props.name,e);
//     }

//     getOptions() {
//         return this.props.datas.map(item => (
//             <option key={item.value} value={item.value}>
//                 {item.text}
//             </option>
//         ))
//     }

//     render() {
//         const bx = this.getOptions();
//         return (
//             <select name={this.props.name} value={this.props.check} onChange={this.changeCheck.bind(this)}>
//                 <option value="">请选择{this.props.name}</option>
//                 {bx}
//             </select>
//         )
//     }
// }


// HOC
import withFormGroup from '../Hoc/withFormGroup'

function CreateOption(props) {

    return (<>
        <option value={props.info.value}>
            {props.info.text}
        </option>
    </>)
}


const Options = withFormGroup(CreateOption)
export default class Select extends Component {

    changeCheck(e) {
        this.props.onChange(e.target.value, this.props.name, e);
    }

    render() {
        return (
            <select name={this.props.name} value={this.props.check} onChange={this.changeCheck.bind(this)}>
                <option value="">请选择{this.props.name}</option>
                <Options {...this.props}/>
            </select>
        )
    }
}