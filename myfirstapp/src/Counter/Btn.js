import React from "react";

export default class Buttons extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
}