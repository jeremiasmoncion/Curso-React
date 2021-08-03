import React from 'react';
import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import './App.css';
import Estado from './components/Estado'; 
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import {EventosES6, EventosES7} from './components/Eventos';
import MyVerticallyCenteredModal from './components/Modal';



function App() {  
  return (   
    <div className="App">
      <header className="App-header">

        <section>
        <img src={logo} className="App-logo" alt="logo" />       
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

        
        <section>

      </section>
          <Componente msg ="Primer Componenente 1"/>
          <hr></hr>
          <Propiedades 
          cadena="Esto es una Cadena de Texto" 
          numero={19} 
          booleano = {true}
          arreglo = {[1,2,3]}
          objeto = {{nombre:"Juan", correo:"Juan@gmail.com"}}
          function = {num => num * num}
          elementoReact = {<i> Esto es un elemento React</i>}
          componenteReact = {<Componente msg = "mensaje de componente desde propiedad"></Componente>}></Propiedades>
          <hr></hr>

          <Estado></Estado>

          <hr></hr>

          <RenderizadoCondicional></RenderizadoCondicional>

          <hr></hr>

          <RenderizadoElementos></RenderizadoElementos>

          <hr></hr>

          <EventosES6></EventosES6>
          <hr></hr>
          <EventosES7></EventosES7>

          <hr></hr>

          {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}/> */}

        </section>

      
      </header>

 

    </div>    

  );
}

export default App;
