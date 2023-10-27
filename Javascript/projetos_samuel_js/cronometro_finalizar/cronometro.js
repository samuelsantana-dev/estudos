'use-strict'

//Variaveis
let hora = 0
let minutos = 0
let segundos = 0
let millisecond = 0

//Numeros do html
let cron;
let horaHtml = document.querySelector('#hour')
let minutosHtml = document.querySelector('#minuto')
let segundosHtml = document.querySelector('#second')
let millisecondHtml = document.querySelector('#millisecond')

//Funçoes 
function timer(){
    if((millisecond += 10) == 1000){
        millisecond = 0;
        segundos++;
    }
    if(segundos == 60){
        segundos = 0;
        minutos++;
    }
    if(minutos == 60){
        minutos = 0;
        hora++;
    }

    document.querySelector('#hour').innerText = retornarData(hora)
    document.querySelector('#minuto').innerText = retornarData(minutos)
    document.querySelector('#second').innerText = retornarData(segundos)
    document.querySelector('#millisecond').innerText = retornarData(millisecond)
}

function retornarData(input) {
    // A linha a seguir é uma expressão ternária que avalia a condição "input > 10".
    // Se a condição for verdadeira, o valor de "input" é retornado sem alterações.
    // Caso contrário, o valor de "input" é convertido em uma string usando template literals.
    return input > 10 ? input : `${input}`;
}

//FunçõesOnClick
let botaPause = document.querySelector
('#pause')
botaPause.addEventListener('click', pause)
function pause(){
        //Pausar o cronometro
        clearInterval(cron)
}

let botaoReset = document.querySelector('#reset')
botaoReset.addEventListener('click', reset)
function reset(){
    hora = 0
    minutos = 0
    segundos = 0
    millisecond = 0

    document.querySelector('#hour').innerText = '00'
    document.querySelector('#minuto').innerText = '00'
    document.querySelector('#second').innerText = '00'
    document.querySelector('#millisecond').innerText = '000'

}


let botaoStart =  document.querySelector('#start') 
botaoStart.addEventListener('click', start)
function start(){
    // Cria um intervalo de tempo (cron) que chama a função "timer" a cada 10 milissegundos (0,01 segundo).
    cron = setInterval(() => {  timer(); }, 10)
} 



