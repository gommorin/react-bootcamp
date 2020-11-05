// import logo from './logo.svg';
import './App.css';

// Components
// import Greet from './components/Greet';
// import Counter from './components/Counter';
// import ToggleColor from './components/ToggleColor';
// import Koders from './components/Koders';
import ConditionalRendering from './components/Conditional Rendering'
import CondRend2 from './components/CondRend2'
// import KodersActive from './components/Koders Active'
import Form from './components/Form'
import FormClick from './components/FormClick'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <FormClick />
        <ConditionalRendering />
        <CondRend2 />
      </header>
      {/* <Greet name='Lucho'/>
      <Counter />
      <ToggleColor />
      <Koders />
      <KodersActive /> */}
    </div>
  );
}

export default App;
