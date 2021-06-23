import './App.css';
import NavBar from '../NavBar/NavBar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <p>this is a test sentence</p>
        {/* this is where the navbar will be called */}
      </header>
    </div>
  );
}

export default App;
