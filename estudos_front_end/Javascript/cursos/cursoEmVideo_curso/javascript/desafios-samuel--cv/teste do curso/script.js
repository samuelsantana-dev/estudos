function adiçao() {
   var num = document.getElementById('num')
    var sel = document.getElementById('tab')
    if (num.value.length == 0 ) {
        window.alert('ERRO! Valor incorreto')
    } else {
        var n = Number(num.value)
        var s = 1
        sel.innerHTML = ''
        // calculo da tabuada adiçao
        while (s <= 10) {
              var item = document.createElement('option')
        item.text = `${n} x ${s} = ${n*s}`
        item.value = `tab ${s}`
        sel.appendChild(item)
        c++
        }

    }
}