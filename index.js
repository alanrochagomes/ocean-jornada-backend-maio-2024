const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('Olá, Mundo!')
})


// Lista de Itens
const itens = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

// Endpoint de Read All [GET] /item
app.get('/item', function (req, res) {
    res.send(itens)
})

app.listen(3000)
