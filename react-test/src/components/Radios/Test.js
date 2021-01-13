import React, { Component } from 'react'
import Select  from "./index"
export default class Test extends Component {
    state = {
        datas:[{
            value:"football",
            text:"足球"
        },{
            value:"basketball",
            text:"棒球"
        }],
        
        check:"",
    }

    render() {
        return (
            <div>
                <Select name="love" {...this.state} onChange={val=>{
                    this.setState({
                        check:val
                    })
                }}/>
            </div>
        )
    }
}