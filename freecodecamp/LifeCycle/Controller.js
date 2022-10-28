import React from "react";
import Life from "./Life";


export default class Controller extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value:0,
            display: true
        }

        this.addValue = this.addValue.bind(this)
    }

    addValue(){
        this.setState(state=>({
            value: state.value + 1,
            display: state.display == true?false:true
        }));
    }

    componentDidMount(){
        console.log("I love programming")
    }
    render(){
        function Employee(fname, lname){
            this.fname = fname;
            this.lname = lname;

            return this.fname + " " +this.lname;
        }

        
        return(
            <div>
                <button onClick={this.addValue}>Add</button>
                <Life value={this.state.value}/>
                {/* {condition && return} */}
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        )
    }
}