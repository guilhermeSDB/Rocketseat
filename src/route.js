const express = require('express')
const QuestionController = require('./controllers/QuestionController.js')

const route = express.Router()

route.get('/', (req, res) => res.render("index.ejs"))
route.get('/room', (req, res) => res.render("room.ejs"))
route.get('/create-pass', (req, res) => res.render("create-pass.ejs"))


// Formato que o formulario de dentro da modal tem q passar informação
route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route