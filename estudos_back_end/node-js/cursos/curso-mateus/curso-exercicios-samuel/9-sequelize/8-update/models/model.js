const { DataTypes } = require('sequelize')

const dataBase = require('../db/coon')

const User = dataBase.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN,
    }
})

module.exports = User