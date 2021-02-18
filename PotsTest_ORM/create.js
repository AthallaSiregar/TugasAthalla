const {books} = require('./models')

books.create({
    isbn: 1001,
    judul: "Judul pertama",
    sinopsis: "Sinopsis pertama",
    penulis: "Penulis pertama",
    genre: "Horror"
})

.then(books => {
    console.log(books)
})