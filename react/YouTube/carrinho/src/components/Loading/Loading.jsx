import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi'; // Importa o ícone de carregamento da biblioteca react-icons

import './Loading.css'; // Importa o estilo para o componente Loading

// Define o componente Loading, que exibe um ícone de carregamento
function Loading() {
  return <BiLoaderAlt className="loading" />;
  // Renderiza o ícone de carregamento usando o ícone importado da biblioteca react-icons
  // A classe "loading" é aplicada ao ícone para estilização através do arquivo Loading.css
}

export default Loading;
// Exporta o componente Loading para que ele possa ser usado em outros módulos

