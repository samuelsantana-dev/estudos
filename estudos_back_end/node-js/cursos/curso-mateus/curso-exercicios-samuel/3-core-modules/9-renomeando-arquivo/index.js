const fs = require('fs')

//Era de um arquivos para o outro

fs.rename('novoarquivo.txt', 'arquivosSamuel.txt', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Arquivo renomeado!')
})
