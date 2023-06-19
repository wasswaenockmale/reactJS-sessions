import Intro from '../Intro';
import Series from '../../containers/series'
import './App.css'
import { Component } from 'react';


class App extends Component {

  state={
    value: ""
  }
  // This helps us find the input value
  handleInputChange = (event) => {
    this.setState({value:event.target.value});
  }

  render(){
    return (
      <div className='app'>
        <header className="app-header">
          <h2 className='header-text'>TV series App</h2>
        </header>
        <Intro message="Welcome to the movie site"/>
        <div>
          <input placeholder="Search your favorite movie here" onChange={this.handleInputChange}/>
        </div>
        <Series value={this.state.value}/>
      </div>
    )
    }
}

export default App;