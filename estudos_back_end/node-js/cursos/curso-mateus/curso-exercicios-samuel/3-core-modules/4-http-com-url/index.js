// Importa os módulos http e url do Node.js
const http = require("http");
const url = require("url");

// Define a porta em que o servidor irá escutar as requisições
const port = 3000;

// Cria um servidor HTTP usando a função createServer
const server = http.createServer((req, res) => {
  // Obtém informações sobre a URL da requisição, incluindo parâmetros de consulta
  var urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  // Configura o código de status da resposta para 200 (OK)
  res.statusCode = 200;

  // Configura o cabeçalho da resposta para indicar que o conteúdo é HTML
  res.setHeader("Content-Type", "text/html");

  // Verifica se o parâmetro 'name' está presente na consulta da URL
  if (!name) {
    // Se 'name' não estiver presente, exibe um formulário para preenchimento do nome
    res.end(
      "<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>"
    );
  } else {
    // Se 'name' estiver presente, exibe uma mensagem de boas-vindas com o nome fornecido
    res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
  }
});

// Faz com que o servidor escute na porta especificada e exibe uma mensagem no console quando estiver pronto
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
