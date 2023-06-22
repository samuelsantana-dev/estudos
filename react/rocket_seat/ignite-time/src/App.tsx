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