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

// How to set the PropTypes
/**
 * React provides useful type-checking features to verify that
 * components receive props of the correct type. For example, your 
 * application makes an API call to retrieve data that you expect to be 
 * in an array, which is then passed to a component as a prop. You can 
 * set propTypes on your component to require the data to be of type array.
 * This will throw a useful warning when the data is of any other type.
 * 
 * Note: As of React v15.5.0, PropTypes is imported independently from React, 
 * like this: import PropTypes from 'prop-types';
 */
// The syntax is as below
// MyComponent.propTypes = {propKey: PropTypes.type.isRequired}
import PropTypes from 'prop-types'
ShoppingCart.propTypes = {handleClick: PropTypes.func.isRequired}

// Creating a stateful component.
/**
 * One of the most important topics in React is state. 
 * State consists of any data your application needs to know about, 
 * that can change over time. You want your apps to respond to state 
 * changes and present an updated UI when necessary. React offers a nice 
 * solution for the state management of modern web applications.
 * You create state in a React component by declaring a state property on the 
 * component class in its constructor. This initializes the component with state 
 * when it is created. The state property must be set to a JavaScript object. 
 * Declaring it looks like this:
 * this.state = {
 * 
 * }
 */