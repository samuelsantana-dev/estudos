//Vou alterar as informações de cada um 
class pessoas {
    constructor(name, idade, data){
        this.name = name
        this.idade = idade
        this.data = data
    }
}

//Aqui eles passam a receber novos argumentos

class novasNomes {
        constructor( novoNome, novaIdade, novaData){
            //Se tirar essa parte funciona normalmente
            this.name = novoNome
            this.idade = novaIdade
            this.data = novaData

          this.pessoas = new pessoas(novoNome, novaIdade, novaData)
        }
}

    let novoMostrar = new novasNomes('Samuel ', '18 ', '15')
    console.log(novoMostrar)

class times { 
    constructor(time1, time2, time3 ){
        this.time1 = time1
        this.time2 = time2
        this.time3 = time3  
        time1 = 'real madrid'
        console.log(time1)
    }
  
}

class novosTimes {
    constructor(novoTime1, novoTime2, novoTime3){
        this.times = new times(novoTime1, novoTime2, novoTime3)
    }
}

let mostrar = new novosTimes('Flamengo ', 'Chelsea ', 'Brasil')
console.log(mostrar)