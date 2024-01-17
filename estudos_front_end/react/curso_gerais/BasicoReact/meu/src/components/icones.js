import {GoArrowBoth,GoCalendar,GoClock } from "react-icons/go"
import style from "./icones.module.css"

function icones(){
    return(
        <div>
            <ul className={style}>
                <li><GoArrowBoth /></li>
                <li><GoCalendar /> </li>
                <li><GoClock />  </li>
            </ul>
            <p>Meu conteudo</p>
        </div>
    )
}
export default icones