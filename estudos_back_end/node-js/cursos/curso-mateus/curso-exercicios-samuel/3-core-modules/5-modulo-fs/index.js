const http = require("http");
const fs = require("fs");

const port = 3000;

// Criação do servidor HTTP
const server = http.createServer((req, res) => {
  // Lê o conteúdo do arquivo "mensagem.html"
  fs.readFile("mensagem.html", function (err, data) {
    // Verifica se ocorreu algum erro na leitura do arquivo
    if (err) {
      // Caso haja um erro, envia uma resposta de erro ao cliente
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.write("Erro interno no servidor");
      return res.end();
    }

    // Se a leitura foi bem-sucedida, envia a resposta com o conteúdo do arquivo
    res.writeHead(200, { "Content-Type": "text/html" });

    // Escreve o conteúdo do arquivo na resposta
    res.write(data);

    // Finaliza a resposta, indicando que todos os dados foram enviados
    return res.end();
  });
});

// O servidor escuta na porta especificada
server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
