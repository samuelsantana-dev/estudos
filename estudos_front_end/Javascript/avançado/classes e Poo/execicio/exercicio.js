let arrayNaves = []

class nave {
    constructor (quantidade,nome){
            this.quantidade = quantidade
            this.nome = nome
          
    }
    verdadeiro(){
        this.valorUm = true
        this.valorDois = true
    }
}

function mostrarMenu(){
    let opçoes 
    if(opçoes != '1' && opçoes != '2' && opçoes != '3'){
         opçoes = prompt(
        ' O que deseja fazer?\n ' +
        '1- Fazer nave\n ' +
        '2- Imprimir naves\n ' +
        '3- Sair do programa\n '
    )  
    return opçoes
    }

   
}

function adicionarNavesF(){
    let nomeNave = prompt('Informe o nome da nave: ')
    let quantidadeNave = prompt('Informe a quantidade de passageiros da nave: ')
    let res = new nave(nomeNave, quantidadeNave)
    return res
}

function mostrarNaves(arrayNaves){
    let mostrar = ''
    arrayNaves.forEach(function(valor,indice){
        mostrar += (indice + 1) + ' / ' + valor.nome + ' / ' + valor.quantidade
    })
    prompt(mostrar)
}

//Quer dizer enquanto ou seja mantem algo constante
let escolhido ;
while(escolhido != '3'){
    escolhido = mostrarMenu()
    switch(escolhido){
        case "1":
            let addNaves = adicionarNavesF()
            addNaves.verdadeiro()
            arrayNaves.push(addNaves)
            break 
        case "2":
            mostrarNaves(arrayNaves)
            break
    }
}