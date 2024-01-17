import { useReducer } from "react"


export function UseReducer(){

    const funçaoUseReducer = (state, acao) => {

        //Funciona com o if tambem
        switch (acao) {
            case 'aumentar':
            return state + 1

            case 'diminuir':
            return state - 1

            case 'reset':
                return 0

            default:
                return state
        }
    }

    //useReducer
    const [valorAtual, novoValor ] = useReducer(funçaoUseReducer, 0)

    return(
        <div>
            <h1>{valorAtual}</h1>
            <button onClick={() => novoValor('aumentar')}>Incrementar</button>     
            <button onClick={() => novoValor('diminuir')}>Decrementar</button> 
            <button onClick={() => novoValor('reset')}>Reset</button>                  
        </div>
    )
}