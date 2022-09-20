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