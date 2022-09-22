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
                <p>{this.state.firstName}</p>
            </div>
        )
    }
}