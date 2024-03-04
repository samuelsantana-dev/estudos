// Mais de um valor
const x = 10
const y = 'Algum texto'
const z = [1, 2]

console.log(x,y,z)

//Contagem de impressoes
console.count(`Quantas impressoas ${x} Contagem:`)
console.count(`Quantas impressoas ${x} Contagem:`)
console.count(`Quantas impressoas ${x} Contagem:`)
console.count(`Quantas impressoas ${x} Contagem:`)
console.count(`Quantas impressoas ${x} Contagem:`)

//Variavel entre string 
console.log("O nome é %y, ele é programador", y) //Dessa forma interpola a string 

//Limpar o console
setTimeout(() => {
    console.clear()
}, 2000)
