//Outros testes 

const inserirTime = (callback) => {
    let time = 'Flamengo'
    callback(time)
}

const fraseTime = (frase) => {
    console.log('O time campeao é ' + frase)
}

// A funçao de frase tem que acontecer dentro da funçao de inserir
console.log(inserirTime(fraseTime))