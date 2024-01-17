const temperaturaCelsiu = [ 1,10,33,84,40,23]
//Aqui fez o calculo, o value ja pegou automaticamente do array cada numero e entao o map fez com que o calculo fosse feito com cada valor do array 
const temperaturaCalculo = value => ((value * 9) /5 ) +32
//Encaixa a logica de cada um e colocar para mostrar o certo no console.log e tambem onde ficou guardado cada um,e onde foi feito o calculo corretamente para ser colocado na ultima variavel
const temperaturaFahenreit = temperaturaCelsiu.map(temperaturaCalculo)

console.log(temperaturaFahenreit)