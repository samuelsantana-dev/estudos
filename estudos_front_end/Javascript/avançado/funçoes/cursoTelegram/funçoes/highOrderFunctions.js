//Aqui o parametro funcao é chamado como callback

function velocidade(a, funçao){
    console.log('Primieira funçoa')
    let calculo =  a * 2
    funçao(calculo)
    return calculo
}

let arrowFunction = (value) => {
    console.log('Nova Velocidade ' + value + 'km/s')
}   

console.log(velocidade( 25, arrowFunction))

//Reafazendo o codigo

function velocidadeDois(a, funçao){
    console.log('primeira funaçoa')
    let calculo = a * 5
    funçao(calculo)
    return calculo
}

const arrowFunctionDois = (value) => {
    console.log('Sua velocidade está ' + value + 'km/s')
}

console.log(velocidadeDois(15, arrowFunctionDois))

//OUTRA FORMA DE FAZER Neste codigo eu evito linhas
function velocidadeTres(a, funçao){
    console.log('Primieira funçoa')
    let calculo =  a * 2
    funçao(calculo)
    return calculo
}

let arrowFunctionTres = velocidadeTres(40, function(verificar){
    console.log('Outra velocidade ' + verificar)
})