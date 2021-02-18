const{books} = require('./models')
const query = {
    where: { id: 1}
}

books.update({
    judul: "Judul baru"
}, query)
.then( () => {
    console.log("Books Berhasil diupdate")
    process.exit()
})
.catch(err => {
    console.error("Gagal mengupdate books")
})