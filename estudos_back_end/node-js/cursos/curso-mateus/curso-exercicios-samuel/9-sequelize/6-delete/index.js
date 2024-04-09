const express = require('express')
const exphbs = require('express-handlebars')
const sequelize = require('./db/coon')
const User = require('./models/model')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

app.get('/users/create', function (req, res) {
  res.render('adduser')
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOne({ raw: true, where: {id: id} })

  res.render('userview', { user })
})

app.post('/users/delete/:id', async (req, res) => {
  const id = req.params.id 

  await User.destroy({ where: {id: id}})

  res.redirect('/')
})


app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on'){
        newsletter = true
    }

    console.log(req.body)
    //Esperar a criação do usuario para poder redirecionar
    await User.create({name, occupation, newsletter})
    res.redirect('/')
})

app.get('/', async function (req, res) {

  //o raw ele fazer a conversao e ja traz os dados prontos
  const users = await User.findAll({ raw: true })

  console.log(users)

  res.render('home', { users: users })
})

sequelize.sync().then(() => {
  console.log('Conectado ao banco de dados')
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
  })
}).catch(err => console.error('Erro ao sincronizar com o banco de dados:', err))
