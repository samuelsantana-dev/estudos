function carregar(){
    var img = window.document.getElementById('foto')
    var msg = window.document.getElementById('res')
   var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if( hora >= 6 && hora <= 12){
        // bom dia
        img.src = 'fotomanha.jpg'
        document.body.style = 'background-color:#ff8c00;'
    } else if(hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'fotonoite.jpg'
        document.body.style = 'background-color:#808080;'
    } else {
        // boa noite
        img.src = 'fototarde.jpg'
    document.body.style = 'background-color:#929200;'
    }
}


