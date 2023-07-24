 /* Ogrenci 1 */
let ogrenci1Isim = "Ada Bilgi" 
let ogrenci1Dogum = 2012 
let ogrenci1Notes = [70, 70, 80]

/* Ogrenci2 */
let ogrenci2Isim = "Yigit Bilgi" 
let ogrenci2Dogum = 2010 
let ogrenci2Notes = [40, 40, 50]

/* Ogrenci Yaslari */
let now = new Date().getFullYear()

let ogrenci1Yas = now - ogrenci1Dogum
let ogrenci2Yas = now - ogrenci2Dogum

console.log(ogrenci1Yas)
console.log(ogrenci2Yas)


/* Ortalama Notlar */
let sum = ogrenci1Notes[0] + ogrenci1Notes[1] + ogrenci1Notes[2]
let ogrenci1Avarage = Math.floor(sum / ogrenci1Notes.length)
console.log(ogrenci1Avarage)

let sum2 = ogrenci2Notes[0] + ogrenci2Notes[1] + ogrenci2Notes[2]
let ogrenci2Avarage = Math.floor(sum2 / ogrenci2Notes.length)
console.log(ogrenci2Avarage)



/* Sinifi Gecme Durumu */
if(ogrenci1Avarage >= 50){
    console.log("Tebrikler sınıfı geçtiniz!")
}else{
    console.log("Maalesef sınıfta kaldınız.")
}

if(ogrenci2Avarage >= 50){
    console.log("Tebrikler sınıfı geçtiniz!")
} else{
    console.log("Maalesef sınıfta kaldınız.")
}

