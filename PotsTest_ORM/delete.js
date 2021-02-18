books.destroy({
    where: {
        isbn:1001
    }
})
.then( () => console.log("books dengan isbn 1001 berhasil dihapus"))