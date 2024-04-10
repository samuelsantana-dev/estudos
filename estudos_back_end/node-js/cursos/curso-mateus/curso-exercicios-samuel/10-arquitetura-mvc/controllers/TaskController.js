// A minha controler nao é uma rota ela apenas é o caminho para os arquivos onde vou MOSTRAR os dados
// Nunca deixar uma / na renderização sempre inicia pelo nome inicial
const modelTask = require('../models/Task');

module.exports = class TaskController {
    static createTask(req, res){
        res.render('tasks/create')
    }

    static showTaks(req, res){
        res.render('tasks/all')
    }
}