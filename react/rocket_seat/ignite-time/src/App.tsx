//import { Button } from "./componentes/Button";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/style_global";
import { defaultTheme } from './styles/themes/default';

import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom"


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
       <Router />
       </BrowserRouter>

        <GlobalStyle theme={defaultTheme}  />
        <h1>Parei na aula - O hook useEffect inclusive ja criei a pasta</h1>
     </ThemeProvider>
  )
}

export default App

/*
 <Button cores="primary" />
        <Button cores="secundary" />
        <Button cores="Danger" />
        <Button cores="sucess" />
*/