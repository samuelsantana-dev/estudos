const times = [
    {id: 'flamengo', title: 'Libertadores', titulos: 3, brasileirao:10},{
    id: 'santos', title: 'libertadores', titulos: 3, brasileirao:6
    }, {
        id: 'palmeiras', title: 'libertadores', titulos:2, brasileirao:5
    }, {
        id: 'atletico mineiro', title:'libertadores', titulos:2, brasileirao:2
    }
]

// O sum é feito para somar 
const mostrar = times.reduce((sum, times) => {
    sum.brasileirao += times.brasileirao 
    sum.titulos += times.titulos
    return sum
}, {titulos: 0, brasileirao:0})

console.log(mostrar)