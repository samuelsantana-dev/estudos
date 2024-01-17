//Retornar o total de tribulantes em cada nave
//Retornar o nome de cada nave
//Retornar todos true e todos false
//Retornar todos em caixa alta

const naves = [
    ["fenix", 8, true], ["golias", 10, true], ["helmet",15, false], ["elemental", 3, false], ["Darwin", 4, true], ["foguete", 9, true]
]

let noveTripulantes = naves.filter((value)=>{
        return value[1] >= 9
})

let trueOUfalse = naves.filter((value)=>{
    return value[2] == false
})

let nomeNave = naves.map(function(value){
    return value[0] 
})

let caixaAlta = naves.map(function(value){
    return value[0].toUpperCase()
})

console.log(noveTripulantes)
console.log('\n'+trueOUfalse)
console.log('\n'+nomeNave)
console.log('\n'+caixaAlta)