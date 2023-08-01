import { useEffect, useRef, useState } from "react";

const UseRef = () => {
//preciso declarar a variavel name, o useState('') dessa forma ele ja começa vazio

const [name, setName] = useState("")
const renders = useRef(0)

useEffect(() => {
    //Ele pega o elemento/valor atual
    renders.current = renders.current + 1
})

    return(
    <div>
        {/*Aqui pego o valor do name e retorno com o setName */}
        <input  value={name} onChange={(v) => setName(v.target.value)}/>
        <p>Seja muito bem vindo! {name}</p>
        <p>Contagem dos caracteres digitados no input: {renders.current} </p>

    </div>
) 
}

export default UseRef
