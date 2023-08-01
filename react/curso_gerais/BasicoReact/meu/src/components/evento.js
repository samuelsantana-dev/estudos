import  Button from './button'

function Evento(){

    function meuEvento(){
        console.log('Meu primeiro evento em react foi ativado')
    }

    function segundoEvento(){
        console.log('meu segundo evento foi ativado')
    }

    function terceiroEvento(){
        console.log('teste samuel foi feito')
    }
    /*
     * Codigos de aulas anteriores estao no caderno e nos tutoriais do videos pelo you tube
     */
    return(
        <div>
            <p>
                Clique para disparar
            </p>
            <Button event={meuEvento} text="Primeiro evento"  />
            <Button event={segundoEvento} text="Segundo evento"  />
            <Button event={terceiroEvento} text="Teste Samuel" />
        </div>
    )
    /**
     * o text é so o texto que vai mostrar la na pagina html, o text é o texto do meu button
     */
}
export default Evento