let buah = ["mangga", "pisang", "anggur"];

let buah1 = buah[0];
let buah2 = buah[1];
let buah3 = buah[2];

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

// cara mendeklarasikan variabel berupa array
let namaArray = [element1, element2, element3];

// cara melakukan destrukturisasi array
let [variabel1, variabel2, variabel3] = namaArray;

let buah = ["mangga", "pisang", "anggur"];

// lakukan destrukturisasi array
let [buah1, buah2, buah3] = buah;

console.log(buah1); // Output: mangga
console.log(buah2); // Output: pisang
console.log(buah3); // Output: anggur

// gunakan koma kosong untuk melewati element kedua dan keempat
let [namaDepan, , namaBelakang, , buku] = ["Joanne", "K", "Rowling", "pengarang", "Harry Potter"];

console.log(namaDepan); // Output: Joanne
console.log(namaBelakang); // Output: Rowling
console.log(buku); // Output: Harry Potter

let orang = {
    nama: "Joko",
    umur: 18,
    sudahMenikah: false
  };
  
  let nama = orang.nama;
  let umur = orang.umur;
  let sudahMenikah = orang.sudahMenikah;
  
  console.log(nama); // Output: Joko
  console.log(umur); // Output: 22
  console.log(sudahMenikah); // Output: false

  let orang = {
    nama: "Joko",
    umur: 22,
    sudahMenikah: false
  };
  
  // Destrukturisasi Objek
  let { nama, umur, statusMenikah } = orang;
  
  console.log(nama); // Output: Joko
  console.log(umur); // Output: 22
  console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda

  let orang = {
    name: "Joko",
    age: 22,
  };
  
  // buat variabel nama berisi nilai dari properti name pada orang
  // buat variabel age berisi nilai dari properti umur pada orang
  let { name: nama, age: umur } = orang;
  
  console.log(nama); // Output: Joko
  console.log(umur); // Output: 22

  let murid = {
    kelas: "12a",
    nama: ["ani", "yahya", "sinto"],
    prestasi: {
      olahraga: "juara 1",
      akademik: "juara 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga); // Output: juara 1
  