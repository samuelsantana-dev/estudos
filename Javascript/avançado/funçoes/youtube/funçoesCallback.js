function somar(a, b, callback){
        let operaçao = a + b
        callback(operaçao)
}

function multiplicar(a, b, cb){
        let operaçao = a*b
        cb(operaçao)
}

function exibir(exibir){
    console.log(exibir)
}

somar(10, 15, exibir)
multiplicar(50, 2, exibir)

//Se nao tiver a funçao exibir nao sera mostrado na tela porque nao teve nenhuma chamada para ele

//O meu callback permite reduzir linha de codigos e devo usar metodos de repetiçoes para serem feitos em cada ate um certo limite,e tambem para serem sempre do valor da variavel

function newButton(Text, callback){
        const button = document.querySelector('#button')
        const body = document.querySelector('body')

        callback(button)
        button.textContent = Text
        body.insertAdjacentElement("beforeend", button)   

}

newButton("testando", (botao) => {
        botao.addEventListener('click', () => {
               const botao2 = createElement('button')

              body.innerHTML = botao2.style.cssText = `background-color: green;`
               button.style.cssText = `background-color:red;`
        })
})


