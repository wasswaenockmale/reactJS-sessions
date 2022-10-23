import React from "react";
import Life from "./Life";
export default class Controller extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value:0
        }

        this.addValue = this.addValue.bind(this)
    }

    addValue(){
        this.setState(state=>({
            value: state.value + 1
        }));
    }

    render(){
        return(
            <div>
                <button onClick={this.addValue}>Add</button>
                <Life value={this.state.value}/>
            </div>
        )
    }
}