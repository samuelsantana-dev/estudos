class naveDois {
    constructor (nome, tipo = 'Mundial'){
        //Atributos
        this.nome = nome
        this.tipo = tipo
    }
}

let primeiroExemplo = new naveDois('Flamengo')
let segundoExemplo = new naveDois('Palmeiras ', 'Nao tem mundial')

console.log(primeiroExemplo)
console.log(segundoExemplo)