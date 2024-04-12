const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.saveTaskPost);
router.get('/', TaskController.showTaks);

module.exports = router