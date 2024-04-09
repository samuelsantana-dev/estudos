const express = require('express')
const exHandlebars = require('express-handlebars')
const appExpressExpress = express()
const conexaoBd = require('./db/index')

appExpressExpress.engine('handlebars', exHandlebars())
appExpress.set('view engine', 'handlebars')

appExpress.use(
    express.urlencoded({
        extended: true
    })
)

appExpress.use(express.json())
appExpress.use(express.static('public'))
appExpress.listen(3000)


