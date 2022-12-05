import React from "react";

export class Header extends React.Component{
    super(props);

    render(){
        return(
            <div className="navbar">
                <div className="left">
                    <h1>KBS</h1>
                    <img src="" alt="Logo" className="company-logo"/>
                </div>
                <div className="right"></div>
            </div>
        )
    }
}