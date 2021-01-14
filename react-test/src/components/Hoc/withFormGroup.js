import React from 'react'

export default function withFormGroup(Comp){

    return class FormWrapper extends React.Component{
        
        render(){
            const form = this.props.datas.map(item=><Comp info={item} {...this.props} name={this.props.name} key={item.value}  />)
            return (<>
                {form}
            </>)
        }
    }
}