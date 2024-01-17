let toDoList = []

let button = document.getElementById('button')

let form = document.getElementById('form')

form.addEventListener('submit', function(e){
    let input = document.getElementById('input1').value 
    e.preventDefault()
    
    if(input.length){
        toDoList.push({
            principal: toDoList.length,
            nome: input
        })

        document.getElementById('input1').value = ""
        updateToDoList()
    }  
})

function get(element){
	return document.querySelector(element)
}

function cleanToDoList(){
    // Aqui vai ser o que o cliente colocar
   let li = document.querySelector('#lista')
    li.innerHTML = ""
}

function updateToDoList(){
 cleanToDoList()

    toDoList.forEach(function(item){
       let listaUl = document.querySelector('#lista')

        listaUl.innerHTML += `
        <li>  ${item.principal} ${item.nome} </li>
        `
    })
}