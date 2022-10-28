import React from "react";
export const styles = {
    color: "purple",
    fontSize: 89,
    border:"2px solid purple"
}
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
        return <h1 style={styles} >{this.props.value}</h1>
    }
}