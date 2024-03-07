//Usar o numero stringo como exemplo
const numero = 10
//Fazer uma validação para saber se o numero é inteiro ou string
if(!Number.isInteger(numero)){
    throw new Error('O valor nao é inteiro')
}
//Mostrar no console a meansgem continuando codigo
console.log('O codigo deu certo')
