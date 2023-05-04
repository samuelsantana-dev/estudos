const basquete = {
    time: 'lakers',
    jogador: 'lebron',
    titulos: 18
}

esporteBasquete(basquete) // basquete passou a valer obj
function esporteBasquete(obj) {
    for( let prop in obj) {
        if( typeof obj[prop] === 'string') {
            console.log(prop,obj[prop])
        }
    }
}