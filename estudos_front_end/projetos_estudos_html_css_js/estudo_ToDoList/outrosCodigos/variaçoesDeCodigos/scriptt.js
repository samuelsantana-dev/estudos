let toDoList = []

// Adicionar
let form = document.getElementById('form')
form.addEventListener('submit', function(e){
  
    e.preventDefault()

    let input = document.getElementById('input').value 

    if(input.length){
        toDoList.push({
            res1: input,
            res2: toDoList.length
        })

        document.querySelector('#input').value = ""
        document.querySelector('#input').focus()
        mostrarHtml()
    } 
})

// Funçao de conexao para sempre adicionar
function conexao(){
    let conexao = document.getElementById('lista')
    conexao.innerHTML = ''
}


//Mostrar no html
function mostrarHtml(){

    conexao()

    toDoList.forEach(function(item){
        document.querySelector('#lista').innerHTML += `
        <li id="li" class="flex justify-between w-full border items-center border-radius p-1 mb-1"> 
        <div id="dados">
        ${item.res2} 
        ${item.res1}
                <button id="botaojs cuor-pointer">❌
                 </button>
         </div>        
        </li>
    `
    })
}
