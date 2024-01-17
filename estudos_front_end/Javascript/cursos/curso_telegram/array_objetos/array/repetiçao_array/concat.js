const seleçao = ['Brasil',15, 'argentina',10 ,'italia', 19,'espanha']
const frutas = ['abacaxi','limao','morango','maça']
const mostrar = frutas.concat(seleçao)
console.log(mostrar)

// Fazendo com objetos logo abaixo

const objSeleçao = [{seleçao: 'Brasil', numero:15, fruta:'abacaxi'},{seleçao:'argentina', numero:10, fruta: 'abacaxi'},{seleçao:'alemanha', fruta:20, numero:18}]


const mostrarObj = objSeleçao.reduce((value,seleçao,numero) =>{
    if(numero != seleçao){
        return 'O reduce é melhor de comparar do que o filter '
    } else{
        return 'o Filter nao é tao bom comparador ele é para algo mais especifico'
    }
});
console.log(mostrarObj)
//O reduce é melhor para usar com objetos

console.log(seleçao.length)