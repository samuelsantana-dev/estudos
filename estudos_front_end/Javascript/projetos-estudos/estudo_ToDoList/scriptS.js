toDoList = []

const form = document.querySelector('#submit')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = document.querySelector('#input').value

    if(inputValue.length){
        toDoList.push({
            tamanho: toDoList.length,
            valor: inputValue
        })   
    } else{
        alert('Digite algum valor')
    }


    limparTodolist()
    document.querySelector('#input').focus()
    mostrar()
})

function remover(element){
   element.addEventListener('click', function(){
    const dataId = element.parentElement.parentElement.getAttribute("data-id")
    toDoList = toDoList.filter(function(item){
        return item.id != dataId
    })
   })
}

function limparTodolist(){
    document.querySelector('#input').value = ''

    let ul = document.querySelector('#lista')
    ul.innerHTML = ''
}

function removerTodos(botao){
    
        const removerTodos = document.querySelector('#removerHtt')
        let ul = document.querySelector('#lista')

        removerTodos.addEventListener('click',() =>{
          return ul.remove()
        })
}

function mostrar(){
    let ul = document.querySelector('#lista')
    //O value é valor o array é ele completo e o index é a numeraaçao
    
    toDoList.forEach(function(item){
            ul.innerHTML += ` 
            <li id="li">${item.valor}
            <button class="remover">❌</button> 
              </li> 
            `  
    })  
        let botaoRemover = document.querySelectorAll('.remover')
        botaoRemover.forEach(function(valor){
            remover(valor)
        })
    
}



    //Nao deixa repetir o valor e limpa o input
 //O forEach é melhor para retornar cada item de um array o map faz calculo em cada um por exemplo sao basicamente a mesma coisa 