// Operadores aritimeticos(matematicos)
//operadores de atribuiçao
//operadores de comparaçao
//operadoers logicos
//operadores bitwise

/* OPERADORES ARITMETICOS */
let salario = 100
console.log(salario * salario)
console.log(salario + salario)
console.log(10 ** 10)
console.log(salario / salario)
console.log(salario - salario)
console.log(salario)

let idade = 18
console.log(idade++)
console.log(idade)

let carro = 200 
console.log(carro--)
console.log(carro)

/* OPERADORES DE ATRIBUIÇAO*/

     // o += ele facilica ele vale para todos os operadores exemplo *= /= e por assim vai

let tecladoGamerJogo = 200
console.log(tecladoGamerJogo 
    += tecladoGamerJogo)
console.log(tecladoGamerJogo)

let carro1 = 2000
console.log(carro /= 50)
console.log(carro)

//* OPERADORES DE IGUALDADE */
     // sempre é melhor usa o === do que so com 2 = porque ai nao precisa decorar nada,mostra tambem se é true(verdadeiro) ou false(falso), e compara tambem se os valores e os tipos se sao strings etc e tambem se sao dos mesmos valores

console.log(1 === 1)
console.log('1' === 1)
console.log(1 == 1)
console.log('flamengo' === 'brasil')

/* OPERADORES TERNARIOS */
     // tem um cliente,100 premium, comum a programaçao ela tem uma logica é so voce seguir ela se voce construiu o tipo para saber se premium ou comum entao pede pra mostra o tipo
     let pontos = 200
     let tipo = pontos > 100 ? 'premium' : 'comum' 
     console.log(tipo)


/* OPERADORES LOGICOS*/

//Retorna true se os dois forem true ou seja se forem iguais
    // e -- &&
console.log(true && true)
console.log(false && true)

let maiorDeIdade = true
let possuiCarteiraDeTrabalho = true
let podeAplicar = (maiorDeIdade && possuiCarteiraDeTrabalho)
console.log(podeAplicar)

/* operador ou -- || */
// Retornar true se um dos operadores forem true 
let maiorDeIdade1 = true
let possuiCarteiraDeTrabalho1 = false
let podeAplicar1 = (maiorDeIdade1 ||possuiCarteiraDeTrabalho1)
console.log(podeAplicar1)

/* operador NOT ! megaçao*/ 

let maiorDeIdade2 = false
let possuiCarteiraDeTrabalho2 = true 
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2
console.log(podeAplicar2)
let candidatoRecusado = !podeAplicar2
console.log(candidatoRecusado)



 
