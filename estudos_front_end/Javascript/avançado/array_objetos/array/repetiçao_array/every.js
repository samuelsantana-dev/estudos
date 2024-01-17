
const idadeFamilia = [
    {nome: 'samuel', idade: 29 }, {nome:'sarah', idade: 29}, {nome: 'junior', idade: 26},{nome:'nicolas', idade: 8}, {nome: 'alice', idade:4}
]

const calculo = value => value.idade >= 18 
const mostarRes = idadeFamilia.every(calculo)
console.log(mostarRes)
// Como nem todos sao acima de 18 anos retorna false mas se eles fosse acima de 18 anos retornaria true 
//Essa funçao retorna apenas true ou false 
