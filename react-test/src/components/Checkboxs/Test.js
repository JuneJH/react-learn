import React, { Component } from 'react'
import Checkboxs from "./index"
export default class Test extends Component {
    state = {
        datas:[{
            value:"football",
            text:"足球"
        },{
            value:"basketball",
            text:"棒球"
        }],
        checks:[],
    }

    render() {
        return (
            <div>
                <Checkboxs name="love" {...this.state} onChange={newValue=>{
                    console.log("love",newValue)
                    this.setState({
                        checks:newValue
                    })
                }}/>
            </div>
        )
    }
}
