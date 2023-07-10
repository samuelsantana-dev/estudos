import { MainContent } from './components/MainContent'
import { Side_bar } from './components/Side_bar'

import './styles/components/app.sass'

function App() {

  return ( 
    <div id='portifolio'>
      <h1 id='nome'>Samuel Santana</h1>
      <Side_bar />
      <MainContent />
      <h1>https://www.youtube.com/watch?v=5h4vMtBlQQU</h1>
    </div>
  )
}

export default App
