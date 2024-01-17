const futebol = {
    time: 'chelsea',
    jogador: 'lukagol',
    treinador: 'samuel',
    titulos: 9
}
exibirPropriedades(futebol) // aqui eu conectei o futebol que passou a valer na funçao que passou a valer obj no caso futebol = obj
function exibirPropriedades(obj) {
    for(let prop in obj) {
   if(typeof obj[prop] === 'string') {
    console.log(prop,obj[prop])
   }
    }
}