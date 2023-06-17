import { Button } from "./componentes/Button"
import { ThemeProvider } from "styled-components"

import { defaultTheme } from "./styles/themes/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <Button cores="primary" />
        <Button cores="secundary" />
        <Button cores="Danger" />
        <Button cores="sucess" />
     </ThemeProvider>
  )
}

export default App
