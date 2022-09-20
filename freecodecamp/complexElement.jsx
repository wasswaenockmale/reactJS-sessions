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