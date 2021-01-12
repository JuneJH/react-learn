import React, { Component } from 'react'

export default class ControlledComp extends Component {

    state = {
        name: "",
        sex: "male",
        area: "",
        allArea: [{ label: "北京", value: "北京" },
        { label: "重庆", value: "重庆" },
        { label: "四川", value: "四川" },
        { label: "上海", value: "上海" },
        { label: "广州", value: "广州" },
        { label: "深圳", value: "深圳" },
        ],
        loves:[],
        allLovers:[
            {value:"football",name:"足球"},
            {value:"basketball",name:"篮球"},
            {value:"music",name:"音乐"},
            {value:"movie",name:"电影"},
            {value:"book",name:"看书"},
        ]
    }
    handleChangeInput(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleChangeCheckbox(e){
        if(this.state.loves.includes(e.target.value)){
            this.setState({
                [e.target.name]:this.state.loves.filter(love =>love !== e.target.value)
            })
        }else{
            this.setState({
                [e.target.name]:[...this.state.loves,e.target.value]
            })
        }

    }
    getCheckBox(){
        return this.state.allLovers.map(love=>{
            return (<label key={love.value}>
                <input type="checkbox" name="loves" 
                value={love.value}
                checked={this.state.loves.includes(love.value)}
                onChange={this.handleChangeCheckbox.bind(this)}/>
                {love.name}
            </label>)
        })
    }
    render() {
        const checkYourLover = this.getCheckBox();
        return (
            <div>
                <form onSubmit={(e)=>{
                    console.log(this.state);
                    e.preventDefault();
                }}>
                    <label>
                        姓名:<input name="name" type="text" value={this.state.name} onChange={this.handleChangeInput.bind(this)} />
                    </label>
                    <label>
                        性别:<input name="sex" type="radio" value="male" checked={this.state.sex === "male"} onChange={this.handleChangeInput.bind(this)}/>男
                    </label>
                    <label>
                        <input name="sex" type="radio" value="female" onChange={this.state.sex === "female"} onChange={this.handleChangeInput.bind(this)}/>女
                    </label>
                    <label>
                        <select name="area" value={this.state.area} onChange={this.handleChangeInput.bind(this)}>
                            <option value="">请选择地区</option>
                            <option value="北京">北京</option>
                            <option value="重庆">重庆</option>
                            <option value="四川">四川</option>
                            <option value="上海">上海</option>
                            <option value="广州">广州</option>
                            <option value="深圳">深圳</option>
                        </select>
                    </label>
                    {checkYourLover}
                    <label>
                        <input type="submit" name="提交"/>
                    </label>
                </form>
            </div>
        )
    }
}
