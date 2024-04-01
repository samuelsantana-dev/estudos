const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('bd_samuel_um_curso', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize
