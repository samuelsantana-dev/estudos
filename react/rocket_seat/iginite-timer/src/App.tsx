// Importa o módulo 'ThemeProvider' da biblioteca 'styled-components'
import { ThemeProvider } from 'styled-components';

// Importa o módulo 'BrowserRouter' da biblioteca 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

// Importa o componente 'Router' do arquivo './Router'
import { Router } from './Router';

// Importa o módulo 'GlobalStyle' do arquivo './styles/global'
import { GlobalStyle } from './styles/global';

// Importa o objeto 'defaultTheme' do arquivo './styles/themes/defaults'
import { defaultTheme } from './styles/themes/defaults';

// Importa o componente 'CyclesContextProvider' do arquivo './contexts/CyclesContext'
import { CyclesContextProvider } from './contexts/CyclesContext';

// Declaração do componente principal 'App'
function App() {
  // O retorno do componente 'App' é uma estrutura de elementos React
  return (
    // O componente 'ThemeProvider' permite definir um tema que será disponível para todos os componentes que utilizam o 'styled-components'
    <ThemeProvider theme={defaultTheme}>
      {/* O componente 'BrowserRouter' é usado para fornecer a funcionalidade de roteamento para os componentes abaixo dele */}
      <BrowserRouter>
        {/* O componente 'CyclesContextProvider' envolve o componente 'Router' para fornecer o contexto 'CyclesContext' a todos os componentes abaixo dele na árvore de componentes */}
        <CyclesContextProvider>
          {/* O componente 'Router' é renderizado aqui. Ele é responsável por renderizar os componentes com base nas rotas definidas */}
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
      {/* O componente 'GlobalStyle' é usado para aplicar estilos globais ao aplicativo */}
      <GlobalStyle />
    </ThemeProvider>
  );
}

// Exporta o componente 'App' para que possa ser utilizado em outras partes da aplicação
export default App;

