import React from "react";
import Counter from "./Counter";

import '../App.css'

export default class Btn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            input:"Zero"
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this)
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

    /**
     * 
     * @param {*} event it will the onChange event
     * @returns 
     * Simply return an updated state.input
     */
    handleChange(event){
        return this.setState(state=>{
            return state.input = event.target.value;
        })
    }
    render(){
        return(
            <div className="container">
                <input placeholder="Enter something here" onChange={this.handleChange}></input>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
                <div>
                    <Counter count={this.state.counter}/>
                    <p>{this.state.input}</p>
                </div>
            </div>
        )
    }
}