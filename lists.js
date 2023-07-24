/* pop() methodu son elemanı siler son elemanı döndürür. */
/* shift() methodu ilk elemanı siler, silinen elemanı döndürür. */
/* push() methodu dizinin sonuna eleman ekler. */
/* unshift() methodu dizinin başına eleman ekler. */
/* concat() methodu dizileri birleştirip bir dizi haline getirir, dizinin sonuna ekler. Orijinal dizi etkilenmez. */
/* splice() methodu dizileri bir dizi, değişken eklemek için veya çıkarmak için kullanılabilir. */
/* flat() methodu dizileri birleştirir ve tek bir dizi haline getirir. */
/* js array methods */


/* let ogrenciler = ["mehmet", "ahmet", "cevdet","osman"];
let ogretmenler = ["selami, hayri, kasım"]

sonuc = ogrenciler.join(" ");
sonuc = ogrenciler.pop();
sonuc = ogrenciler.shift();
sonuc = ogrenciler.push("Hayrettin");
sonuc = ogrenciler.unshift("Niyazi");
sonuc = ogrenciler.concat(ogretmenler);
sonuc = ogrenciler.splice(0, 0, "hande");
sonuc = ogrenciler.flat();

console.log(sonuc); */

/* LISTS EXAMPLE */
//Elma, armut, muz, çilek elemanlarına sahip bir dizi oluşturunuz.
let fruits = ["Elma", "Armut", "Muz" ,"Çilek"];
//Dizi kaç elemanlıdır?
result = fruits.length;
//Dizinin ilk ve son elemanı nedir?
result = fruits[0];
result = fruits[fruits.length-1];
//Elma dizinin bir elamanı mıdır?
result = fruits.includes("Elma")
//Kiraz meyvesini listenin sonuna ekleyiniz.
result = fruits.push("Kiraz");
//Dizinin son 2 elemanını siliniz.
result = fruits.splice(fruits.length-2,2);
//Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız

/* let ogrenci1 = ["Yigit Bilgi", 2010, [70,60,80]];
let ogrenci2 = ["Ada Bilgi", 2012, [80,80,90]];
let ogrenci3 = ["Ahmet Turan", 2009, [60,60,70]]; */


let ogrenci1= {
    ogrenciAd: "Yigit Bilgi",
    dogum: "2010",
    notlar: {
        ilk: 70,
        ikinci: 60,
        ücüncü: 80
    }
}
let ogrenci2= {
    ogrenciAd: "Ada Bilgi",
    dogum: "2012",
    notlar: {
        ilk: 80,
        ikinci: 80,
        ücüncü: 90
    }
}
let ogrenci3= {
    ogrenciAd: "Ahmet Turan",
    dogum: "2009",
    notlar: {
        ilk: 60,
        ikinci: 60,
        ücüncü: 70
    }
}

//Ogrencilerin yasları
let date = new Date();
let year = date.getFullYear();

console.log(year - ogrenci1.dogum)
/* console.log(year - ogrenci2[1])
console.log(year - ogrenci3[1]) */

//Ogrencilerin not ortalaması
let ogrenci1note = (ogrenci1.notlar.ilk + ogrenci1.notlar.ikinci + ogrenci1.notlar.ücüncü) /3;
let ogrenci2note = (ogrenci2.notlar.ilk + ogrenci2.notlar.ikinci + ogrenci2.notlar.ücüncü) /3;
let ogrenci3note = (ogrenci3.notlar.ilk + ogrenci3.notlar.ikinci + ogrenci3.notlar.ücüncü) /3;


console.log(Math.floor(ogrenci1note), Math.floor(ogrenci2note), Math.floor(ogrenci3note));


/* 
console.log(fruits)
console.log(result); */
