import React, { Component } from 'react'

export default class Radios extends Component {

    changeCheck(e){
        this.props.onChange(e.target.value,this.props.name,e);
    }

    getCheckboxs() {
        return this.props.datas.map(item => (
            <label key={item.value}>
                <input
                    type="radio"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.check === item.value} 
                    onChange={this.changeCheck.bind(this)}/>
                    {item.text}
            </label>
        ))
    }

    render() {
        const bx = this.getCheckboxs();
        return (
            <>
                {bx}
            </>
        )
    }
}
