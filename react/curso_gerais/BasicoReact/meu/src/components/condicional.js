import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    /**
     * email vai ser onde vai guadar o valor do input ou seja a variavel e onde vai ser mostrada no site e o setEmail a funçao
     * 
     * O userEmail vai onde vai mostrar o valor e se passa esse valor dentro da funçao de enviar email logo abaixo
     */

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    
    function limparEmail(){
        userEmail('')
    }

    return(
        <div>
            <h3>Testando condicional If</h3>
            <form>
                <input type="email" placeholder="Digite o e-mail" onChange={(e) => setEmail(e.target.value)} />
                <br>
                </br>
                <button type="submit" onClick={enviarEmail}>
                    Enviar Condicional
                </button>
             {userEmail && (
                <div>
                    <p>
                        O e-mai do usuario é: {userEmail}
                    </p>
                    <button onClick={limparEmail}>
                    limpar email
                    </button>
                </div>
             )
                     }
            </form>
        </div>
    )
}
 export default Condicional