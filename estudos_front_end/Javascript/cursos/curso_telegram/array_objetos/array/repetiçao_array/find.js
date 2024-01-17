const sobremesas = [
    {nome: 'pave', dieta: false},
    {nome: 'Bobom', dieta: false},
    {nome: 'mouse', dieta: false},
    {nome: 'barra de chocolate', dieta: true},
    {nome: 'misto', dieta: true},
]

// Ja busca automaticamenteo o true em calculo e vai retornar o primeiro que achar diferente do filter que retornaria todos os true do elemento

const calculo = value => value.dieta  
const mostrar = sobremesas.find(calculo)
console.log(mostrar)
