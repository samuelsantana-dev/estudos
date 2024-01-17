import React from "react";
 

//Aqui passou a se tornar a organizaçao e o conteudo em si ficou no planet 
const PlanetaDois = (props) => {


    if(props.link){
        return(
            <div class="divImg">
                <p>{props.descriçao}</p>
                <p>
                    <a href={props.link}>{props.link}</a>
                </p>
                <img src={props.img}></img>
            </div>
        )
        } else {
            return(
                <div class="divImg">
                  <u> <p>{props.descriçao}</p> </u>
                </div>
            )
        }
        
    
}

//OUTRA FORMA USANDO O IF E ELSE

   /*
   return(
    <div class="divImg">
         <h2>{props.title}</h2>
        <p>{props.paragrafo}</p>
        <p>{props.descriçao}</p>
        <img class="img"  src={props.img}></img>
        <p>
              <a href={props.link}>{props.link}</a>
        </p>
        </div>
        )
*/
export default PlanetaDois