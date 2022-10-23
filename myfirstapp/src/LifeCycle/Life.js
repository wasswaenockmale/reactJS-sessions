export default class Life extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(){
        console.log("Should I update!");
        return true;
    }

    componentDidUpdate(){
        console.log("Component re-rendered.")
    }

    render(){
        return <h1>{this.props.value}</h1>
    }
}