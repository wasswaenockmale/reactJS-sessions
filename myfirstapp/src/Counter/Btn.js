import React from "react";
import Counter from "./Counter";

import '../App.css'

export default class Btn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment(){
        return this.state.counter + 1
    }

    decrement(){
        return this.state.counter - 1
    }

    render(){
        return(
            <div>
                <button>Increment</button>
                <button>Decrement</button>
                <button>Reset</button>
                <div>
                    <Counter />
                </div>
            </div>
        )
    }
}