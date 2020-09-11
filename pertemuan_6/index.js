//Object

const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,  
};



//Deklarasi object
//1. Object Literals
const mhs1 = {
    namaDepan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat: {
        jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function(){
        let total = 0
        this.IPSemester.forEach(function(el){
            total = total + el
        })
        this.IPKomulatif = total / 4
    },
}
delete mhs1.namaBelakang
console.log(mhs1)

//2. Kata kunci new
// const mhs2 = new Object()
// mhs2.namaDepan ="Jane"
// mhs2.namaBelakang = "Smith"

// Akses Properti Object
//1. Dot notation
console.log(mhs1.umur)
//2. Bracket notation
console.log(mhs1["namaBelakang"])

console.log(mhs1.alamat.jalan)
console.log(mhs1.IPSemester[2])
mhs1.hitungIPK()
console.log(mhs1)


//Array Object (JSON)
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "002",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "003",
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    }
]

mahasiswa.forEach(function(el){
    console.log(el)
})