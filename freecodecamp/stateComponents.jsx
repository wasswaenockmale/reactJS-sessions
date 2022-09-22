class MyComponent extends React.Component{
    constructor(props){
        super(props);

        // creating a state.
        // I have been able to create a state in React 
        this.state = {
            firstName: "Enock Male"
        }
    }

    // Now render
    render(){
        return(
            <div>
                {/* This is how they render the state props to the jsx.
                But the state can be sent to another child component through the props
                 */}
                <p>{this.state.firstName}</p>
            </div>
        )
    }
}