// Importando os módulos necessários do Node.js
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');


// Definindo a porta do servidor
const port = 3000;

// Criando o servidor HTTP
const server = http.createServer((req, res) => {
  // Analisando a URL da requisição
  var q = url.parse(req.url, true);
 // Analisando a URL da requisição e removendo a barra inicial do caminho do arquivo
 var filename = q.pathname.substring(1);

  // Exibindo o nome do arquivo no console
  console.log(filename);

  // Verificando se o arquivo solicitado é do tipo HTML
  if (filename.includes('html')) {
    // Verificando se o arquivo existe no sistema de arquivos
    if (fs.existsSync(filename)) {
      // Lendo o conteúdo do arquivo e enviando como resposta
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    } else {
      // Caso o arquivo não seja encontrado, respondendo com um arquivo 404.html padrão
      fs.readFile('404.html', function (err, data) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
      });
    }
  }
});

// Iniciando o servidor e exibindo uma mensagem quando estiver pronto
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
