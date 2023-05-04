import React from "react";

function eventosUm(){

    function testeUm(){
        alert('teste')
    }

    function enviarFormulario(e){
        e.preventDefault()
        alert('Enviando formulario')
    }
    return(
        <div>
            <h2>
                Testando eventos
            </h2>
            <button type="button" value="Botao Enviar" onClick={testeUm}>Botao Enviar</button>
            <h2>
             botao em formulario         
             </h2>

             <form onClick={enviarFormulario}>
                    <button type="submit">
                            Enviar Formulario
                    </button>
             </form>

        </div>
    )   
}

export default eventosUm