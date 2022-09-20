import logo from './logo.svg';
import './App.css';

// This means that this is a stateless component.
function App() {
  return (
    <div className="App" id='main-element'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className='title-h1'>This is my first program</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
