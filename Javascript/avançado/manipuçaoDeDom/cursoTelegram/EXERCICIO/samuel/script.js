//let botao = document.querySelector('botao')

const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    adicionar() 
})


function selection(){
    //Nao pode ter o mesmo nome da funçao com qualquer variavel ao lado
   let select = document.querySelector('#select').value

   let listaJs = document.querySelectorAll('.lista').innerHTML  // obter o conteúdo HTML da lista

   let listaHtml = document.querySelector('#lista')

   if(select == 'disponivel'){
    listaHtml.innerHTML = `<h4>Disponiveis são os que voce adcionou no formulario</h4> <div> ${listaJs}</div>`
   } 
   else if(select == 'alugado') 
   {
    listaHtml.innerHTML = ` <p> Aqui está a lista de alugadas</p> <br> <div> ${listaJs}</div>`  
   } 
   else {
    alert('Adicione alguma casa' + 'ou' + 'Va em alugados')
   }
     
}

function adicionar(){
    let tipo = document.querySelector('#tipo').value
    let area = document.querySelector('#area').value
    let lista = document.querySelector('#lista')
   
    
    if(tipo != '' && area != ''){ 
        lista.innerHTML += `<div class="li"> 
        <p> AREA: ${tipo} </p>  
        <p>  TIPO: ${area} </p> 
        <button class="remover"> Remover </button> 
        <hr>
        </div> `
      
    } else{
        alert('deu erro')
    }

    document.querySelector('#tipo').value = ''    
    document.querySelector('#area').value = ''

    let buttonRemover =  document.querySelectorAll('.remover')
    buttonRemover.forEach(function(valor){
        remover(valor)
    })
}

function remover(elemento){
     elemento.addEventListener('click', function(){
        let item = this.parentNode; // seleciona o elemento pai do botão "Remover"
        item.parentNode.removeChild(item); // remove o elemento pai da lista
        } )
}
   
/**
 * 
function selectt(){
    //Nao pode ter o mesmo nome da funçao com qualquer variavel ao lado
   let select = document.querySelector('#select').value

   let listaJs = document.querySelector('.lista').innerHTML // obter o conteúdo HTML da lista
   let listaHtml = document.querySelector('#lista')

   if(select == 'disponivel'){
    listaHtml.innerHTML = `<h4>Disponiveis são os que voce adcionou no formulario</h4> <ul> ${listaJs}</ul>`
   } else if(select == 'alugado') {
    listaHtml.innerHTML = ` <p> Aqui está a lista de alugadas</p> <br> <ul> ${listaJs}</ul>`  
   } else {
    alert('Adicione alguma casa' + 'ou' + 'Va em alugados')
   }
     
}
 */