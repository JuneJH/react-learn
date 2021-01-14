import React, { Component } from 'react'

// export default class Checkboxs extends Component {

//     changeCheck(e){
//         let newChecks;
//         if(e.target.checked){
//             newChecks = [...this.props.checks,e.target.value]
//         }else{
//             newChecks = this.props.checks.filter(it=>it !== e.target.value)
//         }
//         this.props.onChange(newChecks,this.props.name,e);
//     }

//     getCheckboxs() {
//         return this.props.datas.map(item => (
//             <label key={item.value}>
//                 <input
//                     type="checkbox"
//                     name={this.props.name}
//                     value={item.value}
//                     checked={this.props.checks.includes(item.value)} 
//                     onChange={this.changeCheck.bind(this)}/>
//                     {item.text}
//             </label>
//         ))
//     }

//     render() {
//         const bx = this.getCheckboxs();
//         return (
//             <>
//                 {bx}
//             </>
//         )
//     }
// }

// 使用高阶组件后

import withFormGroup from '../Hoc/withFormGroup'
 class Checkboxs extends Component {

    changeCheck(e) {
        let newChecks;
        if (e.target.checked) {
            newChecks = [...this.props.checks, e.target.value]
        } else {
            newChecks = this.props.checks.filter(it => it !== e.target.value)
        }
        this.props.onChange(newChecks, this.props.name, e);
    }


    render() {
        return (
            <label key={this.props.info.value}>
                <input
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.checks.includes(this.props.info.value)}
                    onChange={this.changeCheck.bind(this)} />
                {this.props.info.text}
            </label>
        )
    }
}

export default withFormGroup(Checkboxs)
