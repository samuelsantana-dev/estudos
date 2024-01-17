let buscar = document.querySelector('#buscar')
buscar.addEventListener('click', pesquisar)
function pesquisar(element){
 document.querySelector('#buscar').style.display = "none"
 document.querySelector('#buscarU').innerHTML = ` 
 <span id="fechamento"> 
 <input type="text" placeholder="busca"> 
 <button type="button" class="fechar">X</button> 
 </span>
 `
 let botaoFechar = document.querySelector('.fechar')
 botaoFechar.addEventListener('click', fechar)
}


function fechar(){
    document.querySelector('#fechamento').style.display = "none"
    document.querySelector('#buscar').style.display = "block"
}