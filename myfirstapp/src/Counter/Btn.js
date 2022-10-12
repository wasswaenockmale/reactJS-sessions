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
        this.reset = this.reset.bind(this);
    }

    increment(){
        return this.setState(()=>{
            let count = this.state.counter;
            count += 10
            return {counter: count}
        })
    }

    decrement(){
        return this.setState(state=>{
            let count = state.counter;
            count -= 5
            return {counter: Math.max(count, 0)} //This will help the return values that are greater than zero
        })
    }

    reset(){
        return this.setState({counter: 0})
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <div>
                    <Counter count={this.state.counter}/>
                </div>
            </div>
        )
    }
}