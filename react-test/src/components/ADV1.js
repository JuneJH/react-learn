import React, { Component } from 'react'

function getData(){
    return;
}
export default class ADV1 extends Component {
    render() {
        const data = getData();
        const bs = data.map(it=><div>{it.name}</div>)
        return (
            <div>
                我是广告组件1111111111111
                {bs}
            </div>
        )
    }
}
