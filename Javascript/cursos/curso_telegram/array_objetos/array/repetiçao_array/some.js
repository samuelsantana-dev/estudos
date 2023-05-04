const idadeFamilia = [
    {nome: 'samuel', idade: 18}, {nome:'ernestino', idade: 38},{nome:'nicolas', idade: 8}, {nome: 'alice', idade:4}
]

const calculo = value => value.idade >= 18
const mostarRes = idadeFamilia.some(calculo)
console.log(mostarRes)


//Retorna true por que tem pessoas com uma idade maior que 18 anos 
//Se nos trocarmos os valores vai retornar false exatamente porque nao teria nenhuma pessoa com idade maior que 18 anos 
