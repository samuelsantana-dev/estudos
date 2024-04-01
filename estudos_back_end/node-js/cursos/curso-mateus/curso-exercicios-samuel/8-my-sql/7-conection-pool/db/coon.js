const mysql = require('mysql')

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_samuel_um_curso',
})

console.log('Conectado ao MySQL!')

module.exports = conn