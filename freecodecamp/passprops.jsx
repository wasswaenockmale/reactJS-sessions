// Passing properties to a stateless functional Component. 
const Welcome = (props)=>{
    <div>
        <p>You are most welcome {props.user}</p>
    </div>
}

// This is another stateless component.
const Now = (props)=>{
    <div>
        <p>
            Today is {props.date}
        </p>
    </div>
}
// Trying to use lists in props.
const List = (props)=>{
    return(
        <div>
            {/* The code below will join all the items in the list to one sentence */}
            <p>{props.task.join(", ")}</p>
        </div>
    )
}
// This is the final component.
// It's a class component 
class ParentComponent extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                {/* In the statements below, I have passed data to the components.  */}
                <Welcome user="Enock Male"/>
                <Now date={Date()}/>
                {/* passing a list in a props */}
                <List task={["Programming","Watch a movie","Evening stroll"]}/> 
            </div>
        )
    }
}

// Setting default props in react
// below is the ShoppingCart component
// The component below is stateless.
const ShoppingCart = (props)=>{
    return(
        <div>
            <h4>Shopping cart component</h4>
        </div>
    )
}

// Now, I am writing default props to the above ShoppingCart component.
ShoppingCart.defaultProps = {items:0}