const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('bd_mvc_curso', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conexão realizada com sucesso')
} catch (error) {
    console.error('Falha na conexão:', error)
}

module.exports = sequelize