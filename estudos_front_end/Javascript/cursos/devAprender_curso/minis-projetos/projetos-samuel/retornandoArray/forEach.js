const basquete = ['cesta', 'jogador', 'jogo', 'treinador', 10, 8 ]

//Voltamos sempre com os parametros o que queremos, se nos tirarmos o index e tiver numbers no nosso array ele vai estar como invalido pois precisamos dos parametros para poder retornar cada de forma tranquila 
basquete.forEach((value, index, array) => {
    console.log(` ${index}. ${value}`)
})

//Voltamos so o array
basquete.forEach((array) => {
    console.log(array)
})