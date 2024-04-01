const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbook', function (req, res) {
  const title = req.body.title
  const pageqty = req.body.pageqty

  const query = `INSERT INTO table_test (title, pageqty) VALUES ('${title}', ${pageqty})`;

  conn.query(query, function (err) {
    if (err) {
      console.log(err)
    }

    res.redirect('/')
  })
})

app.get('/books', function (req, res) {
  const query = `SELECT * FROM table_test`;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err)
    }

    const books = data

    console.log(data)

    res.render('books', { books })
  })
})

app.get('/books/:id', function (req, res) {
  const id = req.params.id

  const query = `SELECT * FROM table_test WHERE id = ${id}`;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err)
    }

    const book = data[0]

    console.log(data[0])

    res.render('book', { book })
  })
})

app.get('/books/edit/:id', function (req, res) {
  const id = req.params.id

  const query = `SELECT * FROM table_test WHERE id = ${id}`
  

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err)
      return
    }

    const book = data[0]

    console.log(data[0])

    res.render('editbook', { book })
  })

})

app.post('/books/updatebook', function (req, res) {
    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty
  
    const query = `UPDATE table_test SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`;

  
    conn.query(query, function (err) {
      if (err) {
        console.log(err)
      }
  
      res.redirect(`/books/`)
    })
  })

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bd_samuel_um_curso',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})
