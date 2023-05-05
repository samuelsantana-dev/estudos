function foguete(velocidade, aceleraçao, res= 'km/s'){
    let soma = velocidade + aceleraçao 
    return soma
}

console.log(foguete(20, 20))

// ou 

function carro(velocidade, aceleraçao, res = 'km/s'){
    let soma = velocidade + aceleraçao
    console.log('Nova velocidade ' + soma)
    return soma
}

carro(20,22)