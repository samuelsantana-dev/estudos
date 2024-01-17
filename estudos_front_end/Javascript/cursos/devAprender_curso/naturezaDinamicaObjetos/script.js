const obj = {
    cor: 'red', 
    carro: 'selta'
}

obj.velocidade = 5000;
obj.trocarDPI = function () {
    console.log('trocando API')
}
delete obj.velocidade;
delete obj.trocarDPI;
console.log(obj);
