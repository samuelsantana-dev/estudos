function fundoTransparente(){
    document.querySelector('#estiloP').style.backgroundColor = 'transparent'
}

function fundoVermelha(){
    let element = document.querySelector('#estiloP')
    element.style.backgroundColor = 'red'
}

function corAzul(){
    let element = document.querySelector('#estiloP')
    element.classList.add('blue-color')
}

function removerCor(){
    document.querySelector('#estiloP').classList.remove('blue-color')
 }

 /*
  * No dom existe uma propriedade chamada ClassList que retorna um objeto que tem 2 metodos que é um para ADICIONAR UMA CLASSE CSS e o outro serve para REMOVER UMA CLASSE CSS 
  */