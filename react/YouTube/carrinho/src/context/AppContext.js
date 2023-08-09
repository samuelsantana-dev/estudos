import { createContext } from 'react';
// Importa a função 'createContext' do módulo 'react'
// O 'createContext' é usado para criar um contexto no React, permitindo compartilhar informações entre componentes sem a necessidade de passá-las explicitamente através de props

const AppContext = createContext();
// Cria um novo contexto chamado 'AppContext' utilizando a função 'createContext'
// Esse contexto servirá como um contêiner para armazenar e compartilhar estados e funções entre diferentes componentes

export default AppContext;
// Exporta o contexto 'AppContext' para que ele possa ser importado e utilizado em outros componentes
