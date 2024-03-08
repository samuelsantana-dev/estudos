const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>Olá este é meu primeiro texto no servidor</h1><p>Testando Atualização</p>')
})

server.listen(port, () => {
    console.log(`Estou usando a porta ${port}`)
})