//Usando o this e funçao anonnima em objetos

 const mostrar = function(){
    console.log(this.nome)
}

let objetos = {
    nome: 'samuel',
    f: mostrar
}

const campeonato = function(){
    console.log(this.time)
}

let objetos2 = {
    time: 'flamengo', 
    function: campeonato
}
console.log(objetos.f())
console.log(objetos2.function())