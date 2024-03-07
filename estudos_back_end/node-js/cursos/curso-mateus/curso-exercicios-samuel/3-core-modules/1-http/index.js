//Chamar o meu http 
const http = require("http")
//Criar uma port 3000 dentro de uma variavel
const port = 3000
//criar uma server com createServer 
const server = http.createServer((req, res) => {
    res.write("Oi http esta tudo certo!")
    res.end()
})
//Usar um listen para ouvir a port com a frase qualquer
server.listen(port, () => {
    console.log(`Estou usando a porta ${port}`)
})