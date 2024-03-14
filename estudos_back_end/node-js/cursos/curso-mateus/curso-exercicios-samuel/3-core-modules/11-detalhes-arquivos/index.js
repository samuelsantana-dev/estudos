// Importando o módulo 'fs' do Node.js
const fs = require('fs');

// Obtendo informações sobre o arquivo 'novoarquivo.txt'
fs.stat('novoarquivo.txt', (err, stats) => {
  // Verificando se ocorreu algum erro ao obter informações sobre o arquivo
  if (err) {
    console.error(err);
    return;
  }
  // Verificando se o caminho especificado se refere a um arquivo regular
  console.log(stats.isFile());  
  // Verificando se o caminho especificado se refere a um diretório
  console.log(stats.isDirectory());
  // Verificando se o caminho especificado se refere a um link simbólico
  console.log(stats.isSymbolicLink());
  // Exibindo a data de criação do arquivo
  console.log(stats.ctime);
  // Exibindo o tamanho do arquivo em bytes
  console.log(stats.size);
});
