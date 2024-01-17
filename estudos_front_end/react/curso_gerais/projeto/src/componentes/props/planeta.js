import React, {fragment} from "react";
import PlanetaUm from "./planetas_forma1/planetaUm/planetaUm";
import PlanetaDois from "./planetas_Forma2/planetaDois/planetaDois";


//Colocando if e else 
function Planeta(props){
    let title;

    return(
        <div>
            <h2>Adicionando planetas</h2>
            
            {/*<PlanetaUm /> */}
            <PlanetaDois title="Testando props" paragrafo="Um paragrafo feito em props"  descriçao="Culturalmente está associado à velocidade, já que, na mitologia romana, Mercúrio representa um mensageiro que utiliza da sua velocidade para entregar mensagens com rapidez aos destinatários."  link="https://brasilescola.uol.com.br/geografia/o-planeta-terra.htm" img="https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg" />
            <hr></hr>
            { <PlanetaDois title="Sobre a terra" descriçao="O planeta Terra é o planeta habitado por nós, seres vivos. Conhecido também como planeta água, é o maior dentre os quatro planetas rochosos que fazem parte do Sistema Solar." img="https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg" /> }
        </div>
    )
}

export default Planeta