let sayilar = [1,5,7,16,3,25];

//Sayılar listesindeki her bir elemanın karesini yazdırınız.
/* for(let i in sayilar){
    console.log(sayilar[i] * sayilar[i])
} */

//Sayılar listesndeki hangi sayılar 5'in katıdır?
/* for(let i in sayilar){
    if(sayilar[i] % 5 == 0){
        console.log(sayilar[i])
    }
} */

//Sayılar listesindeki çift sayıların toplamını bulunuz.
/* for(let i in sayilar){
    let ciftSayilar = (sayilar[i]%2)

    if(ciftSayilar==1){
        console.log("bu bir tek sayidir")
    }else{
        console.log(`${ciftSayilar} bu bir çift sayidir`)
    }
} */


//Urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

/* for(let i in urunler){
    let buyuk = urunler[i].toUpperCase();
    console.log(buyuk)
}
 */
//Urunler listesinde içinde samsung geçen kaç ürün vardır?
/* for(let i in urunler){
    let sIceren = urunler[i].includes("samsung");
    console.log(sIceren);
} */



let ogrenciler = [
    {ad: "yigit", soyad: "bilgi", notlar: [60,70,60]},
    {ad: "ada", soyad: "bilgi", notlar: [80,70,80]},
    {ad: "çınar", soyad: "turan", notlar: [70,70,60]}
];

//Ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

let sum = 0;
let sum1 = 0;
let sum2 = 0;

for(let i=0; i<ogrenciler.length; i++){
    
    sum += ogrenciler[0].notlar[i]
    sum1 += ogrenciler[1].notlar[i]
    sum2 += ogrenciler[2].notlar[i]
}

let yigit = sum / 3;
let ada = sum1 / 3;
let cinar = sum2 / 3;

console.log(Math.floor(yigit));
console.log(Math.floor(ada));
console.log(Math.floor(cinar));

let toplam = Math.floor((sum + sum1 + sum2)/9);
console.log(`Tüm öğrencilerin notlarının toplamının ortalaması ${toplam}'dır`)