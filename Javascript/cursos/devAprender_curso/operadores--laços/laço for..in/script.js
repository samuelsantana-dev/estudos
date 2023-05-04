// For--In

const pessoa = {
    nome: 'samuel',
    idade: 18,
    time: 'flamengo'
}
 for (let chave in pessoa) {
    // As 3 formas de mostrar o que esta dentro de uma variavel ou um array
    console.log(chave);
    console.log(pessoa.idade)
    console.log(pessoa['time'])
 }

 /* Formas de acessar array */

 let cores = ['Azul', 'vermelho', 'branco']

    for(let indice in cores) {
        console.log(indice,cores[indice])
    }




