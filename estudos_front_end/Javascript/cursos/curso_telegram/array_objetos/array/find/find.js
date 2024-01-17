//Ele vai retornar o primeiro elemento que for igual

let array = ['flamengo ', 'brasil ', 'real madrid ', 'chelsea ', 'barcelona ']

let seteCaracteres = array.find((value)=>{
    return value.length <= 10
})

console.log(seteCaracteres)