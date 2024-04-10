const express = require('express');
const exHandlebars = require('express-handlebars');
const appExpress = express();
const conexaoBd = require('./db/index');
const Task = require('./models/Task');

const TaskRoutes = require('./routes/taksRoutes');

const handlebarsInstance = exHandlebars.create({});

appExpress.engine('handlebars', handlebarsInstance.engine);
appExpress.set('view engine', 'handlebars');

appExpress.use(express.urlencoded({ extended: true }));
appExpress.use(express.json());
appExpress.use(express.static('public'));

appExpress.use('/tasks', TaskRoutes);

conexaoBd
.sync()
.then(() => {
    appExpress.listen(3000);
    console.log('Servidor está rodando na porta 3000');
})
.catch((error) => console.log(error))

