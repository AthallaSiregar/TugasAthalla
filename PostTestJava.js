// Object
console.log("ini Data diri saya");
let DataDiri = {
    nama: "Athalla",
    umur: "19",
    tanggalLahir: "18 Agustus 2001",
    domisil: "Depok",
    namaPacar: "nina"
};

console.log(DataDiri.nama)
console.log(DataDiri.umur)
console.log(DataDiri.tanggalLahir)
console.log(DataDiri.domisil)
console.log(DataDiri.namaPacar)

console.log() //buat break


// Array 
console.log("ini adalah keluarga siregar");
const namaKeluarga = [
    "Pak Siregar",
    "Bu Siregar",
    "Ka Siregar",
    "Bang Siregar",
    "Dek Siregar"
    ]

namaKeluarga.forEach(function(member) {
    console.log(member)
})
   