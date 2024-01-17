import { HeaderContainer } from './Style'
import  logoIgnite  from '../../assets/ignite-logo.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header(){
    return(
        <HeaderContainer>
            <img src={ logoIgnite } alt='Logo ignite' />
            <nav>
                {/* to="" é o caminho */}
                <NavLink to="/" title='Time'>
                    <Scroll size={25}/>
                </NavLink>

                {/*title="" É o que vai aparecer quando o cliente passar o mouse por cima */}
                <NavLink to="/history" title='Historia'>
                    <Timer size={25}/>
                </NavLink>
             
            </nav>
        </HeaderContainer>
    )
}