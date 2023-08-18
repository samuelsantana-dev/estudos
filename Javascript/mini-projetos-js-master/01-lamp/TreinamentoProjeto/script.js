//Lozalizar 2 botoes
const ligar = document.getElementById("ligar")
const desligar = document.getElementById("desligar")

//Localizar imagem do html
let img = document.querySelector(".img")

//Criar funcao ligar
function Ligar(){
    img.src = '../img/ligada.jpg'
}

// Criar funçao desligar
function Desligar(){
    img.src = '../img/desligada.jpg'

}

function ImagemQuebrada(){
    img.src ='../img/quebrada.jpg'
}

function ImagemVoltaNormal(){
    img.src = '../img/desligada.jpg'
}

//Criar funçao mouseOuve para colocar imagem quebrada

//Funcionalidade aos botoes
ligar.addEventListener("click", Ligar)
desligar.addEventListener("click", Desligar)

img.addEventListener("mouseover", ImagemQuebrada)
img.addEventListener("mouseleave", ImagemVoltaNormal)
