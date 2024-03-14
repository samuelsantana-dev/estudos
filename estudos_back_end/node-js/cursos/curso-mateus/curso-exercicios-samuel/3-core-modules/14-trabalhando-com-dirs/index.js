const fs = require('fs')

// Verifica se a pasta 'minhapasta' não existe
if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe')
}

// Cria a pasta 'minhapasta'
fs.mkdirSync('minhapasta')

// Verifica se a pasta 'minhapasta' existe após a criação
if (fs.existsSync('minhapasta')) {
  console.log('Existe')
}
