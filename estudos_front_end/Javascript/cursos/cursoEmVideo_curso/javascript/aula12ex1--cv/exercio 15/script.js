function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) >  ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {        
        var fsex = document.getElementsByName('radsex')
        var idade = ano-Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // essa da imagem é de como vai adicionar as fotos 
    } if (fsex[0].checked) {
        genero = 'homem'
        if ( idade >= 0 && idade < 10) {
           // cirança
           img.setAttribute('src', 'crianca menino.jpg') 
        } else if (idade < 21) {
           // jovem 
           img.setAttribute('src', 'adolescente homem.jpg')
       } else if (idade < 50) {
           // adulto
           img.setAttribute('src', 'homem idoso.jpg')
       } else {
           // idoso
           img.setAttribute('src', 'homem idoso.jpg')
       } 
    } else if (fsex[1].checked) {
        genero = 'mulher'
    
    if ( idade >= 0 && idade < 10) {
        // cirança
        img.setAttribute('src', 'crianca menina.jpg') 
    } else if (idade < 21) {
        // jovem 
        img.setAttribute('src', 'menina adolescente.jpg')
    } else if (idade < 50) {
        // adulta
        img.setAttribute('src', 'mulher idosa.jpg')
    } else {
        // idosa
        img.setAttribute('src', 'mulher idosa.jpg')
    } 
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img) 

}