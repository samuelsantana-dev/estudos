let array = ['flamengo ', 'brasil ', 'real madrid ', 'chelsea ', 'barcelona ']

const aumentar = array.map(function(value){
    let upperCase = value.toUpperCase()
    return upperCase
})

console.log(aumentar)