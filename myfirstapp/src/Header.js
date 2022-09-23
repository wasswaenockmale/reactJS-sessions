import '/sytle.css'

function Second(props){
    return (
        <div>
            <h2>This is my second component</h2>
            <p>{props.name}</p>
        </div>
    )
}

export default Second