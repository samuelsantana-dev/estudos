// é possivel criar varios objetos dentro de objetos

const celular  = {
    bateria: 5000,
    marca: 'sansung',
    loja: 'fujioka',
        compra: {
            site: 'site',
            entrega: 'netshoes'
        },
        ligar: function (){
            console.log('fazendo ligaçao')
        }
}

const novoObjeto = Object.assign({
    bateria: 500
},celular);
console.log(novoObjeto);

// Outra forma 

const objeto2 = {...celular};
console.log(objeto2);