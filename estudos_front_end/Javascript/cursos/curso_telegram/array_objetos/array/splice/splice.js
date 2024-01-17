let array = ['flamengo ', 'brasil ', 'real madrid ', 'chelsea ', 'barcelona ']

let removerSplice = array.splice(1,2, 'teste', 'teste 2')

//Aqui ele retorna o elemento removido
console.log( 'O elemento removido foi ' + removerSplice)

//Aqui ele retorna o elemento completo atualizado 
console.log('Aqui esta o array completo ' + array)

