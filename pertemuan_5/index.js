// Array
let mhs =[];
mhs[0] = "John"
mhs[1] = "Bob"
mhs[2] = "Jane"
mhs[3] = "Peter"

console.log(mhs);

//2. isi array
mhs[1] = "Donny";
console.log(mhs);

//3. menghapus isi array
mhs[2] = undefined;
console.log(mhs);

//4. Menampilkan isi array
let mhs = ["John", "Bob", "Jane", "Peter"];

for (let i = 0; i<mhs.length;i++){
    console.log("Mahasiswa ke-" +(i+1) +" adalah "+ mhs[i]);
}

//method array
//1. length
console.log(mhs.length);
//2. to string
console.log(mhs.toString);
//3. join
console.log(mhs.join(" - "));

//push, pop, unshift, shift
mhs.push("mah1");
mhs.push("mah2");
console.log(mhs.join(" - "));
mhs.pop();
mhs.pop();
console.log(mhs.join(" - "));
mhs.unshift("mah2")
mhs.unshift("mah1");
console.log(mhs.join(" - "));
mhs.shift();
mhs.shift();
console.log(mhs.join(" - "));

//5. Concat
let buah = ["Mangga", "Apel", "Anggur"];
let sayur = ["Kangkung", "Bayam"];
let makanan = sayur.concat(buah);
console.log(makanan);

//6. Splice & Slice
//a. Splice
let buah = ["Pisang", "Mangga", "Apel", "Jeruk"];
buah.splice(2,0,"Melon","Semangka");
console.log(buah.join(" - "));

//b. Slice
let buah2 = buah.slice(0,3);
console.log(buah.join(" - "));

//7. forEach dan map
//a. forEach
for(let i=0; i<mhs.length;i++){
    console.log("Mahasiswa ke-"+ (i+1)+" adalah "+ mhs[i]);
}

let angka = [1,2,3,4,5,6,7,8];

let tampilAngka = function(el){
    console.log(el)
}

angka.forEach(tampilAngka);

//b. map
let angka2 = angka.map(function(el){
    return el;
})
console.log(angka)

//8. Sort
let angka = [1,100,2,13,5,3,7,8];
let mhs = ["John","Bob","Erick"];
mhs.sort();
console.log(mhs);
angka.sort()
console.log(angka);
angka.sort(function(a,b){
    return a-b
})
console.log(angka);

//9. Filter
let angka= [1,100,2,13,5,3,7,8];

let angka2= angka.filter(function (el){
    return el>5;
});
console.log(angka2);