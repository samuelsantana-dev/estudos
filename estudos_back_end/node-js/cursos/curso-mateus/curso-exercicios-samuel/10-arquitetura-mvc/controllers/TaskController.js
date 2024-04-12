// A minha controler nao é uma rota ela apenas é o caminho para os arquivos onde vou MOSTRAR os dados
// Nunca deixar uma / na renderização sempre inicia pelo nome inicial
const Task = require('../models/Task');

module.exports = class TaskController {
    static createTask(req, res){
        res.render('tasks/create')
    }

    static async saveTaskPost(req, res){
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)
        res.redirect('/tasks')
    }

    static async showTaks(req, res){
        const task = await Task.findAll({raw: true})

        res.render('tasks/all', {task})
    }
}