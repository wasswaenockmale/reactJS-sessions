import logo from './logo.svg';
// I have imported react to this file.
import React from 'react'

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'We have to work on something now'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({name: "Enock"})
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
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