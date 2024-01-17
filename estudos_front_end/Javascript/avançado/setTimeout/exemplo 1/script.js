let relogio = document.querySelector("#relogio")
let delay = document.querySelector("#delay")

const tempo = () => {
    const date = new Date()

    relogio.innerHTML = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()} ESSA É A FORMA de trabalhar com o tempo`
}

setTimeout(()=>{
    delay.innerHTML = `setTimeout foi executado com sucesso`
})

setInterval(tempo, 1000)


// Executa o evento a cada 10 segundos
//setInterval(() => console.log('setInterval'), 10000);
// Executa o evento depois de 5 segundos
//setTimeout(() => console.log('setTimeout'), 5000);