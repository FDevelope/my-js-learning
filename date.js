let simdi = new Date();
sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getHours();
sonuc = simdi.getDay();


const aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

const tarih = new Date();
let ay = aylar[tarih.getMonth()]; 

console.log(ay);