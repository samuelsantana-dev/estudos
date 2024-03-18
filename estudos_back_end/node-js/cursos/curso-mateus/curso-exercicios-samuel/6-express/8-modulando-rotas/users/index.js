const express = require('express') 
var router = express.Router()
const path = require('path')

const basepastas = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basepastas}/userform.html`)
  })
  
  router.post('/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age
  
    console.log(name)
    console.log(age)
  })
  
  // antes do /
  router.get('/:id', (req, res) => {
    console.log(`Carregando usuário: ${req.params.id}`)
  
    res.sendFile(`${basepastas}/users.html`)
  })
  
  module.exports = router