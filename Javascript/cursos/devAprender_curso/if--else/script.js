// Se for 6:00 até 12:00 vai ser bom dia
// Se for de 12:00 até 18:00 boa tarde
// Se for depois das 18:00 boa noite

/* feitos por samuel */
let dia = 254

if (dia > 6 && dia < 12) {
    console.log('bom dia')
} else if (dia > 12 && dia < 18) {
    console.log('boa tarde')
} else if (dia > 18 && dia < 24) {
    console.log('boa noite')
} else {
    console.log('horario nao disponivel')
}



