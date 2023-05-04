import React from "react";
import './Style.css'

//Aqui é a minha base para passar qualquer imagem

function Img(props){
    return(
        <div>
            <img class="img" src={props.img_url} />
        </div>
    )
}

export default Img