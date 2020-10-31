import logo from './logo.svg';
import './App.css';

// Components
import Greet from './components/Greet';
import Counter from './components/Counter';
import ToggleColor from './components/ToggleColor';
import Koders from './components/Koders';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greet name='Lucho'/>
      <Counter />
      <ToggleColor />
      <Koders />
    </div>
  );
}

export default App;
