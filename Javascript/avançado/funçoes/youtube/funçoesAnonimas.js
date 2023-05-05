

const valor1 = 3
const valor2 = 20

const somar = function(b=12){
    
    return valor1 + b
    
}

console.log(somar())

//As funçoes sempre devem ser chamadas em outros locais 

const multiplicar = function(a,b){
    return a * b 
}
console.log(multiplicar(12,6))
console.log(multiplicar(15, 30))
console.log(multiplicar(10,5))
