const {DataTypes} = require('sequelize');
const conexaoBd = require('../db/index');

const Task = conexaoBd.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

module.exports = Task