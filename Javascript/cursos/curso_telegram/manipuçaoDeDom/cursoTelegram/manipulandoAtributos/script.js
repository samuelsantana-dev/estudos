function Verificar(){
    let select = document.querySelector
    ('#select').value 
    let input = document.querySelector('#input').value
    let paragrafo = document.querySelector('#mensagem')

    if(select == 'Desabilitado'){
        paragrafo.innerText = 'Texto da caixa esta desabilitado. Ative ele'
        paragrafo.style.backgroundColor = 'transparent'
        paragrafo.style.color = 'black'
    }
    else if(select == 'Habilitado'){
        paragrafo.textContent = input
        paragrafo.style.backgroundColor = 'yellow'
        paragrafo.style.color = 'red'
        input.innerText = ""

    }  else {
        alert('Deu erro')
    }

}