function getPassword(){
    let caracteres = "123456890)(*&¨%$#@!{}^`;.+-*/?\|"
    let tamanhoSenha = 15
    senha = ""

    for(let i =0; i <= tamanhoSenha; i++){
        //Aqui esta apenas o calculo so pega os valores dos caracteres na hora da multiplicação 
        let calculo = Math.floor(Math.random() * caracteres.length)

        senha += caracteres.substring(
            calculo, calculo + 1
        )

        document.getElementById('senha').value = senha
    }
}

/**
 * Senha é inicializada como uma string vazia e, em seguida, a cada iteração do loop for, um caractere aleatório é adicionado a ela usando a função substring()
 */


