import Teste from './olaMundo'
import Estilo from './estilo.module.css'
/*
 * A primeira letra da importaçao sempre maiscula
 * Pode fazer varias importaçoes em varios lugares diferentes mas a raiz tambem la no App.js
 * So fazer a importaçao do css

 */

function components(){

    return(
        <div>
            <Teste />
            <p className={Estilo.testeUm}>Testando novas frases em novos components</p>
            <h1 className={Estilo.testeDois}> Testando variaçoes</h1>
            <h1>Novos testes</h1>
        </div>
    )
}
export default components