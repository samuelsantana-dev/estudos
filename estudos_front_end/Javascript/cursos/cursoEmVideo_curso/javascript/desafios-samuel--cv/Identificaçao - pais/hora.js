var data = new Date()
var hora = data.getHours
if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora >= 18) {
    console.log('Boa noite')
} 