import { useState, useEffect } from "react";

export function UseEffectFunction(){
    const [titulo, setTitulo] = useState("inicial")

    useEffect(()=>{

       fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

       //console.log('testando o log')
    }, [titulo])

    const novoValor = (props) => {
        setTitulo(props)
    }

    return(
        <div>
            <h1>{titulo}</h1>
            <button onClick={() => novoValor("brasil")}>Teste 1</button>      
            <button onClick={() => novoValor("cheklsea")}>JOGO 2</button>            
            <button onClick={() => novoValor("flamengo")}> TeStEs 3</button>            
        </div>
    )
}

