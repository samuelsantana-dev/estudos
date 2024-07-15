//Lozalizar os botoes
const vermelho = document.getElementById("vermelho")
const verde = document.getElementById("verde")
const amarelo = document.getElementById("amarelo")
const automatico = document.getElementById("automatico")

//Localizar a tag imagem
let img = document.getElementById("img")

const imagensAutomaticas = {
    'red': () => img.src = '../img/vermelho.png',
    'amarelo': () => img.src = '../img/amarelo.png',
    'verde': () => img.src = '../img/verde.png'
};


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

function Automatico() {
    setInterval(() => {
        imagensAutomaticas.red();
        setTimeout(() => {
            imagensAutomaticas.amarelo();
            setTimeout(() => {
                imagensAutomaticas.verde();
            }, 2000);
        }, 2000);
    }, 2000);
}

//Criar o addEventListenaer para cada botao
vermelho.addEventListener('click', Vermelho)
verde.addEventListener('click', Verde)
amarelo.addEventListener('click', Amarelo )
automatico.addEventListener('click', Automatico)


