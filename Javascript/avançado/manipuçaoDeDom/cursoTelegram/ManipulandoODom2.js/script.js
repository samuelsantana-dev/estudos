let botaoA = document.querySelector('#adicionar')
botaoA.addEventListener('click', adicionar)

function adicionar(element){
    let numeroR = document.querySelector('#numeroR').value
    let bairro = document.querySelector('#bairro').value
    let cidade = document.querySelector('#cidade').value
    let area = document.querySelector('#area').value

    let res = document.querySelector('#res')

    let li = document.createElement('li')
    li.innerText += 'numero de Residencia: ' + numeroR + ' bairro: ' + bairro + ' cidade: ' + cidade + ' area: ' + area 
    res.appendChild(li)

    const bRemover = document.createElement('button')
    bRemover.setAttribute( "onclick", "remover(this)")
    bRemover.innerText = 'remover'
    li.appendChild(bRemover)
}

function remover(button){
    let liremove = button.parentNode
  document.querySelector('#res').removeChild(liremove)
}



