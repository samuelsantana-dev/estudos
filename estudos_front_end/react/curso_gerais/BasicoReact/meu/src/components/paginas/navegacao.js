import { Link } from 'react-router-dom'

function Navegar(){
    return(
        <div>
            <ul>
            <li> 
                <Link to="/">  Primeira Pagina </Link>
            </li>
            <li> 
                <Link to="/segundo">  Segunda Pagina </Link>
            </li>
            <li> 
                <Link to="/terceira">  Terceira Pagina </Link>
            </li>
            <li> 
                <Link to="/quarta"> Quarta Pagina </Link>
            </li>
            </ul>
        </div>
    )
}

export default Navegar