const express = require('express')
const app = express()
const {books} = require('./models')

app.use(express.json())

//get all boooks
app.get('/books', (req, res) => {
    books.findAll()
    .then(books => {
        res.status(200).json(books)
    })
})

// books by id 
app.get('/books/:id', (req, res) => {
    books.findOne({
        where: { id: req.params.id}
    })
   .then(article => {
       res.status(200).json(books)
   })
})

app.post('/books', (req, res) => {
    books.create({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    })
    .then(books => {
        res.status(201).json(books)
    }).catch (err => {
        res.status(422).json("Can't create books")
    })
})

app.put('/books/:id', (req, res) => {
    books.update({
        isbn: req.body.isbn,
        judul: req.body.judul,
        sinopsis: req.body.sinopsis,
        penulis: req.body.penulis,
        genre: req.body.genre
    }, {
        where: { id: req.params.id}
    })
    .then(article => {
        res.status(201).json(books)
    }).catch(err => {
        res.status(422).json("can't create books")
    })
})