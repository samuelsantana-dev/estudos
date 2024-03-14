const path = require('path')

// path absoluto - ele da o caminho exato
console.log(path.resolve('teste.txt'))

// formar path
const midFolder = 'relatorios'
const fileName = 'samuel.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)
