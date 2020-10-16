/ const hitung = (a,b,c) =>{
//     return a+b+c;
// }

// //console.log(hitung(1,2,3));

// const hitung = (a,b,c,d,e) =>{
//     const angka = [];
//     const hasil = angka.map((el) => total + el)
//     return hasil;
// }

// //Rest operator
// const hitungRest = (...angka) =>{
//     let total=0;
//     angka.forEach((el)=>{
//         total += el 
//     })
//     return total;
// }

// console.log(hitungRest(1,2,3,4,5,6,7));

// //Spread Operator

// const angka = [1,2,3,4,5]
// console.log(angka)
// console.log(...angka) //memecah array

// //1. duplikasi array
// const angka = [1,2,3,4,5]
// const angka2 = [...angka]

// angka[0] =10
// console.log(angka)
// console.log(angka2)
// console.log(...angka)

//2. Menggabungkan array
const angka1 = [1,2,3,4,5]
const angka2 = [6,7,8,9,10]
const angka3 = [11,12,13,14,15]

const gabung5 = angka1.concat(angka2,angka3);
console.log(gabung5)

const gabung6 = [...angka1,...angka2,...angka3]
console.log(gabung6)

let orang = {
    nama: "John",
    umur: 33,
};

orang.pekerjaan = "Guru"
orang = {...orang, pekerjaan: "Guru", pendidikan: "S2"}
console.log(orang);

//Menggabungkan Object
// const obj1 = {a:1,b:2}
// const obj2 = {c:3,d:4}
// const objectGabungan = {...obj1,...obj2}