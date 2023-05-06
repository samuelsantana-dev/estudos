import { Header } from './componentes/Header'
import { Side_bar } from './componentes/side_bar'

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
            
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium repellendus commodi voluptatum! Distinctio ASsascorporis illo nisi ipsam commodi cupiditate ut in vitae, eius qui cumque exercitationem expedita suscipit corrupti beatae.
            </p>
            <p> 
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis exercitationem unde praesentium iste, assumenda placeat. Debitis, dolores ipsa minima nostrum magni harum nam facilis eaque blanditiis nemo ipsum id saepe?
            </p>
           
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