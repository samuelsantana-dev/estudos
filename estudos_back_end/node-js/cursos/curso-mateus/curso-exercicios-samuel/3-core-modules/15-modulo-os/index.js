const os = require("os");

// Exibe informações sobre as CPUs do sistema
console.log(os.cpus());

// Exibe a quantidade de memória RAM livre no sistema
console.log(os.freemem());

// Exibe o diretório padrão do usuário
console.log(os.homedir());

// Exibe o nome do sistema operacional
console.log(os.type());
