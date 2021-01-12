import React, { Component } from 'react'

export default class UnControlledComp extends Component {

    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.fileRef = React.createRef();
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>{
                    console.log("input的值",this.inputRef.current.value);
                    console.log("file的值",this.fileRef.current.files);
                    e.preventDefault();
                }}>
                    <label>
                        姓名:<input  type="text" ref={this.inputRef}/>
                    </label>
                    <label>
                        文件:<input  type="file" ref={this.fileRef}/>
                    </label>
                    <label>
                       <input name="提交" type="submit" />
                    </label>

                </form>
            </div>
        )
    }
}
