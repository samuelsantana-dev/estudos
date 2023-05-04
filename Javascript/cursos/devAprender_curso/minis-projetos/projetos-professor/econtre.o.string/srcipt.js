// Criar um metodo para ler propriedades de um objeto 
// e Exibir somente as propriedades do tip string que estao nesse objeto

const filmes = {
    açao: 'os vingadores',
    comedia: 'gente grande',
    lançado: 2018
}
exibirPropriedades(filmes);
function exibirPropriedades(obj) {
    for(let prop in filmes)  {
        if (typeof obj[prop] === 'string') {
            console.log(prop,obj[prop])
        }
    }
}
