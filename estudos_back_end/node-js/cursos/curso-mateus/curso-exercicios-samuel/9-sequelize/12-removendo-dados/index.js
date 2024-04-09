const express = require('express')
const exphbs = require('express-handlebars')
const sequelize = require('./db/coon')
const User = require('./models/model')
const Address = require('./models/address')

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

app.get('/users/edit/:id', async function (req, res) {
  const id = req.params.id

  User.findOne({
    include: Address,
    where: {
      id: id,
    },
  })
    .then((user) => {
      if (user) {
        res.render('useredit', { user: user.get({ plain: true }) })
      } else {
        // Lidar com o caso em que nenhum usuário é encontrado
        res.status(404).send('Usuário não encontrado')
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Erro interno do servidor')
    })
})

app.post('/users/update', async (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  // Convertendo a string 'on' para booleano true, se estiver marcada
  newsletter = newsletter === 'on'

  const userData = {
      name,
      occupation,
      newsletter
  }

  try {
      await User.update(userData, { where: { id: id } })
      res.redirect('/')
  } catch (error) {
      console.error('Erro ao atualizar o usuário:', error)
      res.status(500).send('Erro ao atualizar o usuário')
  }
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

app.post('/addresses/create', async (req, res) => {

  const UserId = req.body.UserId
  const street = req.body.street
  const number = req.body.number
  const city = req.body.city

  const objAdress = {
    UserId,
    street,
    number,
    city
  }

  await Address.create(objAdress)

   res.redirect(`/users/edit/${UserId}`)
})

app.post('/address/delete', async (req, res) => {
  try {
    const UserId = req.body.UserId
    const id = req.body.id

    await Address.destroy({
      where: {id: id}
    })

    res.redirect(`/users/edit/${UserId}`)
  } catch (error){
    console.log(error)
  }
})
sequelize
.sync()
// .sync({ force: true })
.then(() => {
  console.log('Conectado ao banco de dados')
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
  })
})
.catch(err => console.error('Erro ao sincronizar com o banco de dados:', err))
