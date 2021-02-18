books.findAll() .then(books => console.log(books))

books.findOne({
    where: {id: 1}
})
.then(books => console.log(books))