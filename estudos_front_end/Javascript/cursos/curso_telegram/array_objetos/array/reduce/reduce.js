//reduce muito usado para fazer calculos
// Sempre olhar os paraemtros
//tem os parametros dele mas voce pode colocar os seus 
const times = [
    {id: 'flamengo', title: 'Libertadores', titulos: 3},{
    id: 'santos', title: 'libertadores', titulos: 3
    }, {
        id: 'palmeiras', title: 'libertadores', titulos:2
    }, {
        id: 'atletico mineiro', title:'libertadores', titulos:2
    }
]

//Olhar a logica do codigo ou seja vai mostra o ultimo que recebeu o caluculo e nao ha base porque se nao mosts o codigo errado
const calculo = times.reduce((sum, times) => {
    return sum + times.titulos 
}, 0)

console.log(times)
console.log(`${calculo} aqui esta o resultado de tudo das somas dos valores acima`)

//o times.titulo quer dizer pra mostrar somente os titulos
//Nesse caso eles fez as somas de todos os titulos no total
// O zero significa que vai somar a partir daquele valor se colocar 130 comeca no valor de 130