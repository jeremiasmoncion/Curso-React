import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = "Jere";
  let auth = false;
  let estaciones = ["Primavera", "Verano", "Otoño", "Invierno"]

  return (

    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="Nombre">Nombre</label>
        <input type="text" id="Nombre"></input>
        <h1>{nombre}</h1>
        <p> {auth ? "No logueado" : "Logueado"} </p>

        <ul>
          {estaciones.map((elemento, index) => <li key={index}>{elemento}</li>)}
        </ul>

        <p>
          Editar <code>src/App.js</code> and save to reload.
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
    </div>
    </>


  );
}

export default App;
