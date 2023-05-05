const numeros = [10,25,2,4,5,6,7,14,511,35]
const par = value => value % 2 === 0
const impar = value => value % 2 != 0
let mostrarPar = numeros.filter(par)
let mostrarImpar = numeros.filter(impar)

//Aqui ele vai retornar todos os numeros pares
console.log(mostrarPar)
//Aqui ele vai retornar a quantidade de numeros pares que tem
console.log(`Tem ao total ${mostrarPar.length} numeros pares`)
//Aqui vai retornar todos os numeros impares
console.log(mostrarImpar)
//Aqui vai retornar a quantidade no total de numeros impares 
console.log(`Tem ao total ${mostrarImpar.length} numeros`)

const array = [ {nome: 'samuel' , idade:18}, {nome: 'flamengo', idade:15}]
const validadorTime = value => value == 'flamengo'
let mostrar = array.filter(validadorTime)
console.log(mostrar)