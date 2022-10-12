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
        this.setState(()=>{
            let count = this.state.counter;
            return this.state.counter = count++
        })
    }

    decrement(){
        this.setState(state=>{
            let count = state.counter;
            count--
            return {counter: count}
        })
    }

    reset(){
        this.setState({counter: 100})
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <div>
                    <Counter counter={this.state.counter}/>
                </div>
            </div>
        )
    }
}