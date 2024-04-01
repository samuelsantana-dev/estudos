const express = require('express')
const exphbs = require('express-handlebars')
const sequelize = require('./db/coon') // Importe o sequelize aqui
const User = require('./models/model')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

sequelize.sync().then(() => { // Use sequelize aqui
  console.log('Conectado ao banco de dados')
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
  })
}).catch(err => console.error('Erro ao sincronizar com o banco de dados:', err))
