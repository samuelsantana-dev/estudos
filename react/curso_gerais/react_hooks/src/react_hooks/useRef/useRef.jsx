import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    //preciso declarar a variavel name, o useState('') dessa forma ele ja começa vazio
    const [name, setName] = useState("")

    const inputRef = useRef()

    const UseRefFunction = () => {
        inputRef.current.focus()
    }
    
    useEffect(() => { 
        //Ele pega o elemento/valor atual 
        // inputRef.current basicamente e o valor atual 
        inputRef.current = inputRef.current + 1
    })

    return(
        <div>
            {/*Aqui pego o valor do name e retorno com o setName */}
            <input 
            ref={inputRef}
             value={name}
             onChange={(value) => setName(value.target.value)}
             />
            <button onClick={UseRefFunction}>
                Focar input
            </button>
            <p>Seja muito bem vindo! {name}</p>
        </div>
    )
}

export default UseRef

