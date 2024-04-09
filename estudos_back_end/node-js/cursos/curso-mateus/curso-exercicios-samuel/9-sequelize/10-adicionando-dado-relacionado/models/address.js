const { DataTypes } = require('sequelize')
const db = require('../db/coon')
const User = require('./model')

const Address = db.define('Addresses', {
    street: {
        type: DataTypes.STRING,
        required: true
    },
    number: {
        type: DataTypes.STRING,
        required: true
    },
    city: {
        type: DataTypes.STRING,
        required: true
    }
})

Address.belongsTo(User)

module.exports = Address