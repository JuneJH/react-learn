import React, { Component } from 'react'
import Radios from "./index"
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
                <Radios name="love" {...this.state} onChange={val=>{
                    console.log(this.state.check)
                    this.setState({
                        check:val
                    })
                }}/>
            </div>
        )
    }
}
