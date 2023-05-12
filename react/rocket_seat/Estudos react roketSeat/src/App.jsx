import { Header } from './componentes/Header'
import { Side_bar } from './componentes/Side_bar'
import { Post } from './componentes/post'


//Estilos
import Style from'./App.module.css'
import './global.css'

function App() {

  return (
    <div>
      <Header />

      <div className={Style.wrapper}> 
          <asside> 
              <Side_bar />
          </asside>

          <main>
            <Post />
            <Post />
            <Post />
        
          </main>

       
     
      </div>
    </div>
  )
}

export default App

/*   <Header 
        titulo="Onde está o testeeeeeeeeee"
        texto="Tem duas formas de exzportar usadno o EXPORT diretamente na funçao ou no export default e tem a diferença dos dois principalmente colocado no google documents"
      />*/