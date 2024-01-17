let array = ['flamengo ', 'brasil ', 'real madrid ', 'chelsea ', 'barcelona ']

let arraySlice = array.slice(1, 3)

//Ele nao altera o array em si 
console.log(array)

//Ele retorna apenas o que nos selecionamos 
console.log(arraySlice)


let arrayDois = ['flamengo ', 'brasil ', 'real madrid ', 'chelsea ', 'barcelona ']
let removerSplice = arrayDois.splice(1,2, 'teste', 'teste 2')
//Aqui ele retorna o elemento removido
console.log( 'O elemento removido foi ' + removerSplice)
//Aqui ele retorna o elemento completo atualizado 
console.log('Aqui esta o array completo ' + arrayDois)
