// This is a functional Component.
const Languages = ()=>{
    return(
        <div>
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>HTML</li>
            </ul>
        </div>
    )
}

// Another functional component.
const Programming = ()=>{
    // {/*This component is going to use the composition theory in react. */}
    return(
        <div>
            {/* This is where the child is going. */}
            <Languages/>
        </div>
    )
}

// this is a class component 
class ParentComp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        <div>
            {/* Still writing the child here  */}
            <Programming/>
        </div>
    }
}

// rendering react component to the reactDom is alittle different
// ReactDOM.render(<componentToRender/>, targetNode)
ReactDom.render(<ParentComp/>, document.getElementById("div-id"))