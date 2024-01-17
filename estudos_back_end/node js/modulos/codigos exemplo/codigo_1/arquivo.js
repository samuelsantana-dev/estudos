const fs = require('fs')

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log('Deu ruim')
    } else {
        console.log(data)
    }
})