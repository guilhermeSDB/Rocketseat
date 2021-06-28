const express = require('express')
const QuestionController = require('./controllers/QuestionController.js')
const RoomController = require('./controllers/RoomController.js')

const route = express.Router()

route.get('/', (req, res) => res.render("index.ejs", {page: 'enter-room.ejs'}))
route.get('/create-pass', (req, res) => res.render("index.ejs", {page:'create-pass.ejs'}))

route.get('/room/:room', (req, res) => res.render("room.ejs"))

// Formato que o formulario de dentro da modal tem q passar informação
route.post('/question/room/:room/:question/:action', QuestionController.index)
route.post('/create-room.ejs', RoomController.create)

module.exports = route