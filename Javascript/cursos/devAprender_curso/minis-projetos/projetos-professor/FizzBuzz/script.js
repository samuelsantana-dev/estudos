// Divisivel por 3 => Fizz
// Disponivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Nao é divisivel por 3 e 5 => entrada
// Nao é um numero => 'nao é um numero
const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if ( typeof entrada !== 'number')
        return 'nao é um numero'
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';    
    if (entrada % 3 === 0) 
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
        
    return entrada;    
}

/* Uma letra ferrou o meu codigo*/
// A letra foi o N de number que o N estava maiusculo