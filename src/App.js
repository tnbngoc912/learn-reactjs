import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/Todo'

function App() {
  const name = 'Ngoc'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {name}
        </p>
        <TodoFeature />
      </header>
    </div>
  );
}

export default App;
