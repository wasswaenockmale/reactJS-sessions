function Second(props){
    return (
        <div>
            <h2>This is my second component</h2>
            <p>{props.name}</p>
        </div>
    );
}

// Setting a default value for the props
Second.defaultProps = {name: "Wasswa Enock"}

export default Second