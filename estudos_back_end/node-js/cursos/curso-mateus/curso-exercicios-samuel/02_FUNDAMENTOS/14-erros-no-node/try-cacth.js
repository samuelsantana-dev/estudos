//Try e cath é tipo if e else, o catch é para erros

const numero = 10

try {
    numero = 2
    
} catch (err) {
    console.log(`Erro: ${err}`)
}

//Ele gera essa mensagem de erro ->
//Erro: TypeError: Assignment to constant variable.