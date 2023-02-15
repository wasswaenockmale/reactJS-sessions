import Intro from '../Intro';
import './App.css'
import { Component } from 'react';

class App extends Component {
  state = {
    series: [],
    count: 0
  }
  render(){
    return (
      <div className='app'>
        <header className="app-header">
          <h2 className='header-text'>TV series App</h2>
        </header>
        <Intro message="Welcome to the movie site"/>
        The length of the series is {this.state.series.length}
      </div>
    )
    }
}

export default App;