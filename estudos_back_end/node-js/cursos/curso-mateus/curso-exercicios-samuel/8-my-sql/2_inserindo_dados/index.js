const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

//Necessario para os dados serem enviados e serve para poder enviar os dados como array,objeto, json etc
app.use(
  express.urlencoded({
    extended: true,
  }),
)

//cria um arquivos para expotar
app.use(express.json())
//Minha pagina css
app.use(express.static('public'))

//Minha pagina principal
app.get('/', function (req, res) {
  res.render('home')
})

//minha pagina de formulario
app.post('/books/insertbook', function (req, res) {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const query = `INSERT INTO table_test (title, pageqty) VALUES ('${title}', ${pageqty})`

  conn.query(query, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
})

//iniciando o  banco de dados
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_samuel_um_curso',
})

//Conecto com o banco de dados
conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})
