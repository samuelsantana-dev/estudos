let adicionar = [ 1,29,21,23]
const calculo = value => (value * 15) / 10
let mostrar = adicionar.map(calculo) 
console.log(mostrar)

// o map() voce coloca o calculo ne uma variavel e depois simplesmente chama ela sempre lembrando de conectar com a outra variavel e pegar o valor dela
// Com os parenteses no numero vai ser feito primeiro
// O map faz com que o calculo seja feito com cada um dos numeros