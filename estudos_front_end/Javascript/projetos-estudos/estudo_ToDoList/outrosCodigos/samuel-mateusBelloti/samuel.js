const toDoList = []
const ul = document.querySelector('#lista')

const form = document.querySelector('#form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputValue = document.querySelector('#input').value
    if(inputValue){
        adicionar(inputValue)
    }

    document.querySelector('#input').focus()
    document.querySelector('#input').value = ""
})

const adicionar = (text) => {
    const li = document.createElement('li')
    ul.appendChild(li)

    const h3 = document.createElement("h3")
    h3.innerText = text
    h3.classList.add('h3')
    li.appendChild(h3)

    const botaoE = document.createElement('button')
    botaoE.innerHTML = '✏'
    botaoE.classList.add('botao-editar')
    li.appendChild(botaoE)

    const botaoR = document.createElement('button')
    botaoR.classList.add('botao-excluir')
    botaoR.innerHTML = '❌'
    li.appendChild(botaoR)

    const botaoF = document.createElement('button')
    botaoF.classList.add('botao-riscado')
    botaoF.innerHTML = 'FEITO'
    li.appendChild(botaoF)
  
}

document.addEventListener('click', (e) => {
 
    const elementoClick = e.target
    const li = elementoClick.closest("li")
    const text = elementoClick.closest("h3")

    /* função remover*/ 
    if(elementoClick.classList.contains("botao-excluir")){
       li.remove()
    }

    /* Função finalizada*/
    if(elementoClick.classList.contains("botao-riscado")){
        li.style.color = 'red'
    }

    /*funçao editar*/
        if(elementoClick.classList.contains("botao-editar")){
            li.innerHTML = ` 
                <form id="form2">
                <input type="text" id="input2">
                <button type="submit">  ✅ </button>
                </button> 
                </form>
            `
            form2()
        }
})

 function form2(){
    const form2 = document.querySelector('#form2')
    form2.addEventListener('submit', (e) => {
        e.preventDefault()
        const elementoClick = e.target
        const inputValue = document.querySelector('#input2').value
        
        const li = document.createElement('li')
        ul.appendChild(li)
        ul.getAttribute(inputValue)        

    })
    }

       /*
     * o target é uma propriedade de js que pega o elemento principal
     * Consegue ja ver no conole.log sem o list ul no caso o elemento pai ele serve para mostrar no html
     * o elementoClick tem que receber o li para poder remover no exato que voce clicar
     * o closest apenas localiza de outra forma
     */

       
/**
 * ElementoCLick é para ser para cada elemento criado
 **/

   /*
     * O createElement cria e o appendChild adiciona        
     *  O classList.add() é para adicionar uma classe ao botão 
        * ul esta global na segunda linha
     */