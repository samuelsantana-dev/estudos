//Aqui é a base de dados criada 
//O constructor ele é como se fosse uma funçao e tem os mesmos metodos que qualquer outra função 

class nave {
        constructor(name, quantidadePassageiros){
            this.name = name 
            this.quantidadePassageiros = quantidadePassageiros
        }
}

//Aqui vai estar os valores que eu adicionei 
let observar = new nave('Nave : Flamengo ', 50)
console.log(observar)