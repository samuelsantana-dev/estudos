import { useState } from 'react';
import './App.css';

//Mais avançados
import Evento from './components/evento'
import Form from './components/form';
import Condicional from './components/condicional';
import OutraLista from './components/outraLista';
import SeuNome from './components/seuNome';
import Saudacao from './components/saudacao';
import Icones from './components/icones';

//Primeiros projetos
import OlaMundo from './components/olaMundo'
import Teste from './components/componenteDois'
import PropsUm from './components/propsUm';
import PropsDois from './components/propsDois';
import Fragmento from "./components/fragmentos";

// Aula sobre Links Links,começa onde fica o <Router>
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navegar from './components/paginas/navegacao';
import PrimeiraPagina from './components/paginas/primeiraPagina';


function App() {
  const time = 'chelsea'
  const name = 'samuel'
  const novoNome = name.toUpperCase()

  function soma(a, b){
    return a + b
  }

 //Essa aqui é do arquivo OutraLista
  const minhaLista = ['angular', 'futebol', 'basquete']
 
  //Esse aqui é do SeuNome/Saudacao
  const [nome, setNome] = useState()

 
  return (
    <div className="App">
     <h1>Primeiro projeto </h1>
     <p>Seja bem vindo {novoNome}</p>
     <p>Multiplicação: {2*12}</p>
     <p>Soma: {soma(10,20)}</p>
     <br></br>
      <hr></hr>
     <OlaMundo />
     <Teste />
     <br></br>
      <hr></hr>
     <PropsUm time={time} />
     <br></br>
      <hr></hr>
     <PropsDois pessoa="ronaldo" idade="18" pais="brasil" foto="https://via.placeholder.com/150"  />
     <br></br>
      <hr></hr>
     <Fragmento />
     <br></br>
      <hr></hr>
      <Evento />
      <br>
      </br>
      <hr></hr>
      <Form />
      <br>
      </br>
      <hr></hr>
      <Condicional />
      <br></br>
      <hr></hr>
      <OutraLista lista={minhaLista} />
      <br></br>
      <hr></hr>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
      <br></br>
      <hr></hr>
      <Icones />
      <br></br>
      <hr></hr>
      <Router>
        <Navegar />
        <Routes>
          <Route path="/">
            <PrimeiraPagina />
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;

/** React Router
 *  
 */
/* Primeiros arquivos de treino que sao colocados dentro da div
 *  <p>Seja bem vindo {novoNome}</p>
     <p>Multiplicação: {2*12}</p>
     <p>Soma: {soma(10,20)}</p>
     <OlaMundo />
     <Teste />
     <PropsUm time={time} />
     <PropsDois pessoa="ronaldo" idade="18" pais="brasil" foto="https://via.placeholder.com/150"  />
     <Fragmento />
     ** Arquivos que ficam la em cima para fazer importaçao
     import OlaMundo from './components/olaMundo'
import Teste from './components/componenteDois'
import PropsUm from './components/propsUm';
import PropsDois from './components/propsDois';
import Fragmento from "./components/fragmentos";
 */ 


/*
 * Aqui em cima serve apenas para importar coisas
 * {} dentro de chaves se faz funçoes diretas de javascript e todas as estrutras tambem diretas
 * pode criar funçoes 
 * Sempre se altera o jsx dentro do app() dentro da funçao
 * Aqui eu altero o meu JSX e a div com className app é uma das minha conexoes
 * Usar muito o return 
 * No jsx se chama as situaçoes e nao se cria dentro delas,ou seja,cria em outros lugares e depois so as chama dentro do jsx
 */

 /*
   * A primeira letra sempre tem que ser maiuscula para poder iniciar e tem que ser no aqui na exportaçao e na importaçao
   * Sempre dentro de uma div
   * No propsUm chamou a variavel do arquivo propsUm e trouxe pra esse so fez uma conexao das variaveis para mostrar o valor
   * Na props cria la no outro arquivo o formato e so chama aqui por aqui para aparecer na tela
   */