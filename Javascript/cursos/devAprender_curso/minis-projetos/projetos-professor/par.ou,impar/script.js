// Receber uma quantidade de valores para avaliar
// Funçao exibe se cada valor é par ou impar

exibirTipo(10) // o valor do cliente
function exibirTipo(limite) {
      for (let i = 0;i <= limite;i++) {
        if (i % 2 === 0) {
            console.log(i,'par')
        } else {
            console.log(i,'impar')
        }
      }
}

// O limite representa a funçao dentro da funçao e o exibir tipo é o que o cliente vai colocar,a function é o que o cliente vai colocar


