import { Avatar } from "./Avatar";

//Estilos
import Style from './side_bar.module.css'

export function Side_bar(){ 
    return(
        <aside className={Style.side_bar}> 

            <img  
            className={Style.cover}
            src="https://images.unsplash.com/photo-1590049905079-86306b779ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt="Foto de um computador"
            />

            <div  className={Style.profile}> 
               <Avatar 
               hasBorder
               src="https://avatars.githubusercontent.com/u/104950258?v=4" 
                />
                <strong> Samuel Santana</strong>
                <span>Web devloper</span>
            </div>

            <footer> 
              
                <a href="#">Edite o seu perfil </a>
            </footer>
        </aside>
    );

}

