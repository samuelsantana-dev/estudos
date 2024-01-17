let arrayy = ['flamengo ', 'brasil ', 'real madrid ', 'chelsea ', 'barcelona ']


//Existe uma ordem para ser seguida do callback
//O forEach ele é tipo um quertSelectoAll ele faz com que seja em cada elemento da lista(array)
arrayy.forEach((cadaUm, index,) => {
    console.log( 'Item:' + cadaUm  + '\nIndice ' + index )
})


let array2 = ['a', 'b', 'c']
array2.forEach(function(value, indice, inteiro){
    console.log('valor: ' + value + '\n indice: ' + indice + '\n Inteiro: ' + inteiro)
})

/**
 * currentValue: O valor do elemento atual do array.
index: O índice do elemento atual do array.
array: O array que está sendo iterado.
 */