import { useState } from "react"

function Form(){

    /**
     * Aparece na web depois que chama o cadastrarUsuario
     * Trabalha da mesma forma basicamente igual ao html
     * Vai ultilizar o onChange={}
     * o setPasseworld faz a alteraçao e o passeword mostra no console.log da mesma forma com o name e o setName
     */
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario: ${name}  e a senha: ${passeword}`)
    }

    /**
     * As variaveis sempre guardam o valor
     * E o segundo é so onde vai trocar
     */
    const [name, setName] = useState()
    const [passeword, setPasseword] = useState()

    return(
        <div>
    <form onSubmit={cadastrarUsuario}>
        <div>
            <label htmlFor="name">Digite o seu nome:</label>
            <br></br>
            <input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} placeholder="digite o seu nome"  />
        </div>
        <div>
            <label htmlFor="passeword">Digite a sua Senha:</label>
            <br></br>
            <input type="passeword" id="passeword" name="passeword " onChange={(e) => setPasseword(e.target.value)} placeholder="Digite a sua senha" />
        </div>
        <div>
            <input type="submit" value="Cadastar" />
        </div>
    </form>
        </div>
    )
}

/**
 * o htmlfor serve para 
 */

export default Form