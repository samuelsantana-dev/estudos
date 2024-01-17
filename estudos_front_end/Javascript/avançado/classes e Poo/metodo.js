class nave {
    constructor(name){
        this.name = name
        //Aqui ficou um valor inicial              
        this.velocidade = 0
    }
    //Aqui fez com que fosse sempre adicionando em forma de adição
    acelerar(aceleraçao){
        this.velocidade  += aceleraçao 
    }
}

let mostrarAcelerar = new nave('flamengo')
mostrarAcelerar.acelerar(29)
//A cada vez que chama vai adicionando fazendo o calculo de adição 
mostrarAcelerar.acelerar(15)

console.log(mostrarAcelerar)
