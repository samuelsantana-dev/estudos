
/**
 * 
 * Vai mostrar o valor que eu adicionar
 */

function mostrar(num){
    console.log(num)  
}

function soma(a, b, callback){
    let numero = a + b
    callback(numero)
   
}

function multiplicar(a, b, callback){
    let mult = a * b
    callback(mult)
 
}

soma(55, 10, mostrar)
multiplicar(15, 10, mostrar)