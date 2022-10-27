import React from "react";
import './Footer.css'

export default class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            more:"",
            two: "",
            number: 0
        }

        this.changeEverything = this.changeEverything.bind(this)
    }

    changeEverything(){
        this.setState({more:"Enock",two:"Male",number:24})
    }
    render(){
        return(
            <div className="container">
                <div>
                    <h1>Welcome to Enock</h1>
                    <div className="inner-container">
                        <div className="left-side">
                            <p>Left-side</p>
                        </div>
                        <div className="right-side">
                            <p>Right-side</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}