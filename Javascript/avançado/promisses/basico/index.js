//Criar uma funçao de somar para dar 2 
//Criar uma funçao de acerto e de erro
//Mostrar minha funçao principal onde vou encaixar as outras funçoes

function somar(){
    let soma = 1 + 1

    if(soma == 2){
        acertouOvalor()
    } else{
        errouOvalor()
    }
}

function acertouOvalor(){
    console.log('A soma dos resultados deram certo')
}

function errouOvalor(){
    console.log('A soma dos valores deu errado')
}

console.log(somar())

/**
 * Essa é a DINAMICA que as promisses se encaixam ela vai seguir a ordem que voce fala pra ela seguir
  
 */