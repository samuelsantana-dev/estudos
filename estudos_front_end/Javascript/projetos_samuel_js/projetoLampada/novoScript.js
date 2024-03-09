let ligar = document.querySelector('#ligar')
let desligar = document.querySelector('#desligar')
let img = document.querySelector('#lamp')

function ligamLam(){
    img.src = 'imagem/imagem-ligada.jpg'
}

function desligarLam(){
    img.src = 'imagem/lampada-desligada.png'
}

function quebrada(){
    img.src = 'imagem/imagem-quebrada.jpg'
}
//
function normal(){
    img.src = 'imagem/lampada-desligada.png'
}

ligar.addEventListener('click', ligamLam)
desligar.addEventListener('click', desligarLam )
img.addEventListener('mouseover', quebrada)
img.addEventListener('mouseleave', normal)
// ligar 
// desligar
// Passar o mouse e aparecer a imagem quebrada
// tirar o mouse e voltar a imagem desligada