let toDoList = []

let button = document.getElementById('button')

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
        <li> <div>${item.res1} ${item.res2}</div> </li>
    `
    })
    
}



/*function adicionar(){
    let text = document.getElementById('texto').value
    let list = document.getElementById('lista').innerHTML
    
    Nao precisa do if e else nem sempre precsia do if e do else pode-se fazer sem eles*
    list += "<li>" +text+ "</li>" 

    document.getElementById('lista').innerHTML = list;
} */



