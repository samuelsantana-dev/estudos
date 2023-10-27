const img = document.getElementById( 'img' ); 
const buttons = document.getElementById( 'buttons' ); 
let colorIndex = 0; // Variável que armazena o índice da cor atual
let intervalId = null; // Variável que armazena o ID do intervalo de tempo

const trafficLight = ( event ) => { // Função que é chamada quando um botão é clicado
stopAutomatic(); // Para o modo automático
turnOnevent.target.id; // Aciona a função correspondente à cor do botão que foi clicado
}

// Codigo para passar pa o proximo esta aqui
const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0; // Função que incrementa o índice da cor e o reseta para 0 se ele for maior que 2

const changeColor = () => { // Função que muda a cor da imagem
const colors = ['red','yellow','green']; // Array com as cores do semáforo
const color = colors[ colorIndex ]; // Obtém a cor atual
turnOncolor; // Aciona a função correspondente à cor atual
nextIndex(); // Incrementa o índice da cor
}

const stopAutomatic = () => { // Função que para o modo automático
clearInterval ( intervalId ); // Limpa o intervalo de tempo
}

const turnOn = { // Objeto que mapeia as cores às funções que as ativam
'red':      () => img.src = './img/vermelho.png', // Aciona a função que muda a imagem para a cor vermelha
'yellow':   () => img.src = './img/amarelo.png', // Aciona a função que muda a imagem para a cor amarela
'green':    () => img.src = './img/verde.png', // Aciona a função que muda a imagem para a cor verde
'automatic': () => intervalId = setInterval( changeColor, 1000 ) // Aciona a função que inicia o modo automático
}

buttons.addEventListener('click', trafficLight ); // Adiciona um evento de clique à tag div "buttons" e chama a função "trafficLight" quando um botão é clicado