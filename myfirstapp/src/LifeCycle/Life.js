import React from "react";
export default class Life extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Should I update!");
        // return true;
        if(nextProps.value%2 == 0){
            return true;
        }
        return false
    }

    componentDidUpdate(){
        console.log("Component re-rendered.")
    }

    render(){
        return <h1 style={{color: "green", fontSize:72}}>{this.props.value}</h1>
    }
}