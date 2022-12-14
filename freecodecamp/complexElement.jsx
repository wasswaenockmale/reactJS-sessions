const JSX = <div>
<h1>First complex element</h1>
<p>It has elements listed below</p>
<ul>
<li>h1 element tag</li>
<li>p element tag</li>
<li>unordered list tag</li>
{/*This is how they write comments in reactJS */}
</ul>
</div>

const JXS = <div><p>This is gonna be rendered with ReactDOM.render(componentToRender, targetNode)</p></div>

// Forexample, if there is a div node with an id='example-challenge'
ReactDOM.render(JXS, document.getElementById("example-challenge"))

// attribute naming in jsx becomes camelCase
// self-closing tags in jsx 
// In JSX, the rules are a little different. 
// Any JSX element can be written with a self-closing tag, 
// and every element must be closed. The line-break tag, for example, 
// must always be written as <br />

const comp = <div>
    <h2>Welcome to React</h2><br/>
    <p>Be sure to close all tags!</p>
    <hr/>
</div>

// Everything in react is a component 
// There are two ways to create a componet in jsx.
// One is to use the javascript function.
// Doing this, lets you create a stateless component.
// Learning how to create a stateless component
// What are stateless components in react 
// To create a component with a function, 
// you simply write a JavaScript function that returns either JSX or null. 
// One important thing to note is that React requires your function name 
// to begin with a capital letter. Here's an example of a stateless functional 
// component that assigns an HTML class in JSX:

const DemoComponent = function(){
    return (
        <div className="customClass">
            <h3 className="title">Stateless component</h3>
        </div>
    );
}

/**
 * Another way to create a component in react is with the ES6 class syntax. 
 * I have designed a class called Enock for farther understanding of the concept.
 */
class Enock extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Another way of creating a component.</h1>
                <p>This way, the class extends a React.Component class, so that, 
                    it has access to all react features.
                </p>
            </div>
        )
    }
}

// Understanding the component composition in react 
// This is one way of creating complex user interfaces 
// I am creating a stateless component.
const Heading_3 = ()=>{
    return(
        <div>
            <h3>I am heading 3, child tag</h3>
        </div>
    )
}

// I am now creating a react component using the ES6 SyntaxError. 
class ParentComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="parent">
                <h1>This is the parent component.</h1>
                {/*Below, is the component composition example.*/}
                <Heading_3/>
            </div>
        )
    }
}


