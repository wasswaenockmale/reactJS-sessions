import React from "react";
import Counter from "./Counter";

import '../App.css'

export default class Btn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0,
            input:"",
            submit:""
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        return this.setState({
            input:event.target.value
        })
    }


    handleSubmit(event){
        event.preventDefault();
        return this.setState({
            submit:this.state.input
        })
    }

    componentDidMount(){
        // this method is a component lifeCycle method.
        // It is best to call api, and make communication to 
        // the server here.
    }
    render(){
        return(
            <div className="container">
                <div>
                    {/* <input placeholder="Enter something here" value={this.state.input} onChange={this.handleChange}></input> */}
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                    <div>
                        <Counter count={this.state.counter}/>
                        {/* <p>{this.state.input}</p> */}
                    </div>
                </div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input value={this.state.input} onChange={this.handleChange}></input>
                        <button type="submit">submit!</button>
                    </form>

                    <h1>{this.state.submit}</h1>
                </div>
            </div>
        )
    }
}