let navesEspaciais = [
    {name: "Flamengo", velocidadeMaxima: 100}, {name:  "Brasil", velocidadeMaxima: 80}, {name: "Chelsea", velocidadeMaxima: 60}
]

console.log(navesEspaciais[2].name)
console.log(navesEspaciais[0].velocidadeMaxima)

//O value faz com que nao fique undefined pois o parametro é o valor que a variavel recebe 
navesEspaciais.forEach(function(value){
        console.log( 'Temos as naves de ' + value.name + ' A velocidade maxima é: ' + value.velocidadeMaxima)
})

