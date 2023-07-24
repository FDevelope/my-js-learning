let sonuc;
sonuc = 10;

sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");

sonuc = isNaN("10");
let sayi = 15.123242;

/* alınacak sayı miktarını bileriler */
sonuc = sayi.toPrecision(6);
/* noktadan sonra kaç sayı olacağını belirler */
sonuc = sayi.toFixed(6);
/* sayıyı en yakına yuvarlar */
sonuc = Math.round(12.4);
/* yukari yuvarlar */
sonuc = Math.ceil(12.4);
/* asagi yuvarlar */
sonuc = Math.floor(12.4);
/* karekok bulur */
sonuc = Math.sqrt(36);
/* verilen ilk değerin ikinci kadar üssünü bulur */
sonuc = Math.pow(3,4);
/* verilen değeri mutlak değer içine alıp çıkarır */
sonuc = Math.abs(-10);
/* verilen iki sayıdan küçük olanı bulur */
sonuc = Math.min(3,5);
/* verilen iki sayıdan büyük olanı bulur */
sonuc = Math.max(3,5);
/* rastgele sayı oluşrurur */
sonuc = Math.floor(Math.random() * 100);

console.log(sonuc);