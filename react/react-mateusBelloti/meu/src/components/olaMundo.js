import Estilo from './estilo.module.css'

function OlaMundo(){

    return(
        <div>
            <h1 className={Estilo.testeTres}> 
                Meu primeiro components
            </h1>
        </div>
    )
}

export default OlaMundo
/*
 * Sempre encapsular dentro de uma div dentro de algo que o retorne como um todo
 */ 
