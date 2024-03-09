const desligar = document.getElementById('desligar');
const ligar = document.getElementById('ligar');
const lamp = document.getElementById('lamp');



function ligarLam(){
    lamp.src = './imagem/imagem-ligada.jpg';
}
function desligarLamp(){
    lamp.src = './imagem/lampada-desligada.png'
}
function trocar1(){
    lamp.src = './imagem/imagem-quebrada.jpg'
}
function sair(){
    lamp.src = './imagem/lampada-desligada.png'
}

// Assim se cria uma nova funçao usando o addEventListener
ligar.addEventListener ('click', ligarLam );
desligar.addEventListener('click', desligarLamp)
lamp.addEventListener('mouseover', trocar1)
// sempre lembrar de deixar o script la em baixo no body
lamp.addEventListener('mouseleave', sair)