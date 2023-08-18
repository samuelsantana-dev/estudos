//Lozalizar os botoes
const vermelho = document.getElementById("vermelho")
const verde = document.getElementById("verde")
const amarelo = document.getElementById("amarelo")
const automatico = document.getElementById("automatico")

//Localizar a tag imagem
let img = document.getElementById("img")

const imagensAutomaticas = {
    'red': () => "../img/vermelho.png",
    'amarelo': () => "../img/amarelo",
    'verde': () =>  "../img/vermelho.png",
}


//Criar funçoes
function Vermelho(){
    img.src = '../img/vermelho.png'
}

function Amarelo(){
    img.src = '../img/amarelo.png'
}

function Verde(){
    img.src = '../img/verde.png'
}

function Automatico(){
    setInterval(
        imagensAutomaticas.red.call(img);
        imagensAutomaticas.yellow.call(img);
        imagensAutomaticas.green.call(img);
    ), 2000
}

//Criar o addEventListenaer para cada botao
vermelho.addEventListener('click', Vermelho)
verde.addEventListener('click', Verde)
amarelo.addEventListener('click', Amarelo )
automatico.addEventListener('click', Automatico)


