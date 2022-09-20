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
