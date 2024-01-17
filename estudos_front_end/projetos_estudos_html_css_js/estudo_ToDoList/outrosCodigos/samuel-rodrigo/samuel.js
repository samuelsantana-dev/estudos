let toDoList = []

// Adicionar
let form = document.getElementById('form')
form.addEventListener('submit', function(e){
  
    e.preventDefault()

    let input = document.getElementById('input').value 

    if(input.length){
        toDoList.push({
            res1: input,
            res2: toDoList.length,
            editar: false
        })

        document.querySelector('#input').value = ""
        document.querySelector('#input').focus()
        mostrarHtml()
    } 
})

//1BotaoEditar
function edidar1(){
     let botaoEditar1 = document.querySelector('#botaoEditar1')
     botaoEditar1.addEventListener('click', function(){
        const dados = document.querySelector('#dados')
        const input2 = document.querySelector('#input2').value
        dados.map(function(param){
            
        })
     })
}


// Função apagar =>
function apagar(){
    const botao = document.querySelector("#botaojs")
     const li = document.querySelector('#li')

      toDoList = botao.map(function(item){
        item.remove()
      }

      )
}

//Mostrar no html =>
function mostrarHtml(){

    toDoList.forEach(function(item){
        document.querySelector('#lista').innerHTML += `
        <li id="li" class="flex justify-between w-full border items-center border-radius p-1 mb-1" > 
        <div id="dados">
        ${item.res1}
                <button id="botaojs">❌
                </button>
                <button id="botaoEditar1">✏
                </button> 
         </div>        
        </li>
    `
         apagar()
     })
 }

 
/** Funiciona normalmente sem ela 
 * // Funçao de conexao para sempre adicionar
 * essa funçao nao esta fazendo nenhuma diferença
 * function conexao(){
    let conexao = document.getElementById('lista')
    conexao.innerHTML = ''
}
 */