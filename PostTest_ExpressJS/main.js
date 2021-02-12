const express = require('express')
let posts = require('./posts.json')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/api/v1/posts', (req, res) => {
    const {isbn, judul, sinopsis, penulis, genre} = req.body

    const id = posts[posts.length - 1].id + 1
    const post = {
        isbn,
        judul,
        sinopsis,
        penulis,
        genre
    }
    posts.push(post)
    res.status(201).json(post)
})

app.delete('/api/v1/posts/:id', (req, res) => {
    posts = posts.filter(i => i.id != +req.params.id)
    res.status(200).json(posts)
})

app.put('/api/v1/posts/:id', (req, res) => {
    const id = req.params.id
    posts.filter(post => {
        if(post.id== id){
            post.isbn = req.body.isbn
            post.judul = req.body.judul
            post.sinopsis = req.body.sinopsis
            post.penulis = req.body.penulis
            post.genre = req.body.genre

        }
    })
})

app.get('/api/v1/posts', (req, res) => {
    res.status(200).json(posts)
})

app.get('/api/v1/posts/:id', (req, res) => {
    const post = posts.find(i => i.id === +req.params.id)
    res.status(200).json(posts)
})

app.listen(3000, () => {
    console.log('server nyala!')
})