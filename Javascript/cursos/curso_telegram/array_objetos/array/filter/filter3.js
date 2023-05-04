let array = ['flamengo ', 'brasil ', 'real madrid ', 'chelsea ', 'barcelona ']


let cincoCaracteres = array.filter((value)=>{
    return value.length <= 7 
})
//Tem que definir o que vai querer separar 
console.log(cincoCaracteres)