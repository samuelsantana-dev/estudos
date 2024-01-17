function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if ( txtn.value.length == 0 ) {
        window.alert ('Numero incorreto!')
    } else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <= 10) {
            // aqui é o calculo da tabuada
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
    } 
}