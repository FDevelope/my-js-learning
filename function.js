function merhaba(msg){
    console.log(msg)
}

merhaba("Hello World!")

function yasHesapla(dogumYili){
    let date = new Date().getFullYear();
    console.log(date-dogumYili);
}

yasHesapla(1956);
yasHesapla(1997);


/* ------------------------------------------------------------------------------------------- */
//Kendisine gönderilen kelimeyi belirtilen kez ekrana yazan uygulama fonksiyonu yazınız.

function kelimeSayi(sayi){
    for(let i=0; i<sayi; i++){
        console.log("Birinci sorunun cevabi")
    };
};
kelimeSayi(2);

console.log("----------------------------------")


//Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function alanCevre(en, boy){
    let alan = en * boy;
    console.log(`Bu bilgilere göre alan ${alan} cm2.`);

    let cevre = en*2+boy*2;
    console.log(`Bu bilgilere göre çevre ${cevre} cm.`);
}

alanCevre(23,30);

console.log("----------------------------------")

//Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTura(){
    let arr = [0,1];
    let newArr = Math.random(arr).toFixed();
    
    if(newArr == 1){
        console.log("Yazı");
    }else{
        console.log("Tura");
    };
};

yaziTura();

console.log("----------------------------------")

//Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function tamBolenler(sayi){
    let sayilar = [];

    for(let i=2; i<sayi; i++){
        if(sayi % i == 0){
            sayilar.push(i);
        }
    }
    return sayilar;
}

console.log(tamBolenler(24))


console.log("----------------------------------")

//Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

/* arguments is an array-like object accessible inside functions that contains the values of the arguments passed to that function. */

function toplamSayilar(){
    let sonuc = 0;

    for(let i=0; i<arguments.length; i++) {
        sonuc += arguments[i];
    };

    return sonuc;
}

console.log(toplamSayilar(4))
console.log(toplamSayilar(15,23,42))
console.log(toplamSayilar(2,5,6,12,66,23))
