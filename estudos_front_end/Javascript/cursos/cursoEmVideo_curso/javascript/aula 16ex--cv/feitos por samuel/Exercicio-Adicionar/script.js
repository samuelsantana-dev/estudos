function adicionar() {
    var num =  document.getElementById('num')
    var tab = document.getElementById('seltab')
    var res = document.getElementById('fin')
if ( num.value.length == 0) {
    // Erro para se deixar o espaço em branco
    window.alert('Erro! Adicione o numero a partir de 1')
} else {
    var n = Number(num.value)
    var t = Number(tab.value)
} if (n > 100 || n == 0 ) {
    // Erro para os numeros acima de 100 e para o numero 0
    window.alert('Erro! Adicione um numero dentro de 1 e 100')
} 
}


 function finalizar() {

 }