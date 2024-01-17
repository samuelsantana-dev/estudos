// verbo + substantivo
let corSite = 'azul'
function resetaCor(cor, tonalidades) {
    corSite = cor + '' + tonalidades;
}
console.log(corSite)
resetaCor('vermelho',' verde');
console.log(corSite)

// Alterou a cor do site,chamou a nova funçao resetaCor e colocou a cor que estva dentro do reseta cor se ficasse corSite =""  quer dizer que nao ia ter cor ia sempre ficar sem cor toda vez que chamasse essa funçao

/* nova funçao sem parametro*/

let filmes = 'batman'
function alteraFilmes() {
    filmes = 'vingadores'
}

console.log(filmes)
alteraFilmes('vingadores');
console.log(filmes)

// nova funçao com parametros
let series = 'game of trhones'
function alteraSeries(altera) {
    series = altera
}
console.log(series)
alteraSeries('the walking dead')
console.log(series)

// Adicionando mais de uma funçao
let futebol = 'flamengo'
function alteraFutebol(seleçao, chelsea) {
    futebol = seleçao + chelsea
}
nvvmnl
console.log(futebol)
alteraFutebol('Brasil', ' e chelsea')
console.log(futebol)