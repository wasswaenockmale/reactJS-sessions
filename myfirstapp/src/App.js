// I have imported react to this file.
import React from 'react'
// import '/sytle.css'
import Second from './Header';
import Footer from './Footer';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // This is how you create a state in React.
    this.state = {
      name: 'We have to work on something now',
      age:0,
      occupation:"Your Job",
      visibility: false
    };
    this.handleClick = this.handleClick.bind(this); // This binds the this to the method
    // this.myMethod = this.myMethod.bind(this)

    this.toggleVisibility = this.toggleVisibility.bind(this)// Binding this to the toggleVisibility class.

  }

  // This is a click function 
  handleClick() {
    // Change code below this line
    this.setState({name: "Enock"})
    // Change code above this line
  }

  // This is also a click function 
  toggleVisibility(){
    this.setState(state=>{
      if(state.visibility === true){
        return {visibility:false}
      }else{
        return {visibility:true}
      }
    })
  }
  render() {
    return (
      <div>
        <Second name="Enock Developer"/>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
        {/* <Footer/> */}
      </div>
    );
  }
};


// This means that this is a stateless component.
// function App() {
//   return (
//     <div className="App" id='main-element'>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className='title-h1'>This is my first program</h1>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     // <div className='App'>
//     //   <p>I love programming in Javascript</p>
//     // </div>
//   );
// }
// export default App;