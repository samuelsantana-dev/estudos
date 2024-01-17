import React,{fragment } from "react";

const ExerciciosProp = (props) => {
    return(
        <div>
            <h1>{props.exercico}</h1>
            <p>{props.texto}</p>
            <a href={props.a} target="_blank">{props.a}</a>
            
        </div>
    )
}

export default ExerciciosProp

/**
 * Lembrando que no <a href={props.a}>{props.a}</a> o motivo de ter ele no meio ali é porque sera tudo que é mostrado na tela, o que tem dentro de <> é as configurações lembrando como o link é feito no html

 */