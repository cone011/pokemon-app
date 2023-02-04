import logo from "./logo.svg";
import "./App.css";
import { getSearchPokemon } from "./api/api";

function App() {
  const onObtenerDatos = () => {
    const arr = getSearchPokemon("pikachu");
  };
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
        <button className="btn" onClick={onObtenerDatos}>
          Obtener datos
        </button>
      </header>
    </div>
  );
}

export default App;
