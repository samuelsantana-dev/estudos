import React from 'react';
import './App.css';
import HelloWord from './componentes/helloWord/helloWord';
import Lorem from './componentes/loremIpsum/lorem'
import Planeta from './componentes/props/planeta';
import ExerciciosS from './componentes/props/exercicio/exercicio';
import EventosUm from './componentes/eventos/index'

function App() {
  return (
    <div className="App">
        <HelloWord />
        <hr></hr>
        <Lorem /> 
        <hr></hr>
        <Planeta /> 
        <hr></hr>
        <ExerciciosS />
        <hr></hr>
        <EventosUm />
        <hr></hr>
        
    </div>
  );
}

export default App;
