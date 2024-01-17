import { createContext, useContext, useState } from "react"

//Quando alterar aqui vai alterar tudo de forma global
//Serve para o typscript entender que eu quero e posso enviar qualquer valor para o cyclesContext
const CyclesContext = createContext({} as any)

function ExemploUm(){
    // O {} é para pegar o que esta dentro do objeto da variavel
    let { activeCycle, setActiveCycle} = useContext(CyclesContext)

    return (
        <>
            <h1>
                Teste Um: {activeCycle}
                
            </h1>
            <button onClick={()=> {
                    setActiveCycle(22)
                }}>
                    Alterar o valor do numero
            </button>
        </>
    )
}

function ExemploDois(){
    const { activeCycle } = useContext(CyclesContext)

    return <h1>Teste Dois: {activeCycle}</h1>
}

export function UseContext(){
    //O valor do provider sempre vai prevalecer
    const [activeCycle, setActiveCycle] = useState(0)
    //Provider é o provedor
    return(
        <CyclesContext.Provider value={{activeCycle, setActiveCycle}}>
            <div>
                <ExemploUm />
                <ExemploDois />
            </div>
        </CyclesContext.Provider>
    )
}