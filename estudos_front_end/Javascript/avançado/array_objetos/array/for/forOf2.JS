const times = [
    {id: 'flamengo', title: 'Libertadores', titulos: 3},{
    id: 'santos', title: 'libertadores', titulos: 3
    }, {
        id: 'palmeiras', title: 'libertadores', titulos:2
    }, {
        id: 'atletico mineiro', title:'libertadores', titulos:2
    }, {id:'corinthias', title: 'libertadores', titulos:3}
]

//Ele tambem funciona para objetos
for(item of times) {
    console.log(item.title)
}

//Se nao colocar em estruturas de repetiçoes ficam como undefined
// O seu times passa a valer item e ai mostra todos os seus valores ou voce pode especificar