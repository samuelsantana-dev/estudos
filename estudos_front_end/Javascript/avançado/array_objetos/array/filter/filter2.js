//Vai retornar as seleçoes com 3 copas do mundo
const seleçoes = [
    ['brasil', '5'], ['alemanha', '32'], ['argentina', '2'], ['italia', '3'], ['espanha', '3'], ['chile', '1']
]

//Vai retornar o valor determinado
const mostrar = seleçoes.filter((value) => {
    if(value[1] == '3') return value
}) 


// O value[1] significa de quantas letras ou numeros a string ou numeor o valor vai ter para poder afazer a comparaçao tanto que se alterar aquele valor o codigo para de funcionar.
console.log(mostrar)