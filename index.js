class Rasul {
    constructor(){
        this.nama = ""
        this.daerah = ""
        this.mukjizat = ""
        this.kaum = ""
        this.kelahiran = ""
        this.keturunan = ""
    }

    dakwah(kaum){
        console.log("Berdakwah kepada " + kaum);
    }
}

Nuh = new Rasul()
let nama = Nuh.nama = "Nuh"
let daerah = Nuh.daerah = "Iraq"
let mukjizat = Nuh.mukjizat = "Mendatangkan Banjir yang Besar"
let kaum = Nuh.kaum = "Bani Rasib"
let kelahiran = Nuh.kelahiran = "3993 - 3043 SM"
let keturunan = Nuh.keturunan = "Nabi Syits bin Adam"
Nuh.dakwah(Nuh.kaum)

Ibrahim = new Rasul()
Ibrahim.nama = "Ibrahim"
Ibrahim.daerah = "Iraq"
Ibrahim.mukjizat = "Selamat dari Api"
Ibrahim.kaum = "kaum Harran"
Ibrahim.kelahiran = "1997 - 1822 SM"
Ibrahim.keturunan = "Sam bin Nuh"
Ibrahim.dakwah(Ibrahim.kaum)

Musa = new Rasul()
Musa.nama = "Musa"
Musa.daerah = "Mesir"
Musa.mukjizat = "Tongkat Nabi Musa as bisa berubah menjadi ular dan membelah lautan"
Musa.kaum = "Bani Israil"
Musa.kelahiran = "1527 - 1408 SM"
Musa.keturunan = "Ya’qub bin Ishak"
Musa.dakwah(Musa.kaum)

Isa = new Rasul()
Isa.nama = "Isa"
Isa.daerah = "Palestina"
Isa.mukjizat = "Menghidupkan Orang yang Mati"
Isa.kaum = "Bani Israil"
Isa.kelahiran = "1SM - 32M"
Isa.keturunan = "Sulaiman bin Daud"
Isa.dakwah(Isa.kaum)

Muhammad = new Rasul()
Muhammad.nama = "Muhammad"
Muhammad.daerah = "Mekkah"
Muhammad.mukjizat = "Al-Qur'an"
Muhammad.kaum = "Seluruh manusia dan alam semesta"
Muhammad.kelahiran = "571M - 632M"
Muhammad.keturunan = "Ismail bin Ibrahim"
Muhammad.dakwah(Muhammad.kaum)

const all_rasul = [
    Nuh,
    Ibrahim,
    Musa,
    Isa,
    Muhammad
]

for(rasul of all_rasul){
    console.log(rasul);
}
// class Ayam{
//     constructor(){
//         this.nama = ""
//         this.jumlahKaki = 2
//         this.ras = "Hutan"
//         this.warna = "Hitam"
//     }

//     terbang(){
//         console.log("Ayamnya Terbang");
//     }

//     makan(makanan){
//         console.log(nama + " Makan " + makanan);
//     }
// }

// Renbo = new Ayam()
// let nama = Renbo.nama = "Ayam Renbo"
// let kaki = Renbo.jumlahKaki = "1"
// let warna = Renbo.warna = "Putih"
// let ras = Renbo.ras = "Ayam Hutan"
// let makan = Renbo.makan("Bakso Miftah")

// console.log(Renbo);

// let nabi = ["Adam", "Idris",  ]

// class Nabi{
//     constructor(){
//         this.nama = ""
//         this.Mukjizat = 2
//         this.Kaum = "Hutan"
//         this.usia = 950
//     }

//     dakwah(kaum){
//         console.log("Nabi berdakwah" + kaum);

//     }
// }
