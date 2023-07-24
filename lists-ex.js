/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

let date = new Date()

let urunler = {
    id: 101,
    siparisTarihi: "31.12.2022",
    odemeSekli: "Kredi Kartı",
    kargoAdresi: "Yahya kaptan mh. Kocaeli İzmit",
    satinAlinanUrunler : {
        urun1 :{
            urunId: 5,
            urunBasligi: "Iphone 13 Pro",
            urunUrl: "http://abc.com/iphone-13-pro",
            urunFiyati: 22000
        },
        urun2 :{
            urunId: 6,
            urunBasligi: "Iphone 13 Pro Max",
            urunUrl: "http://abc.com/iphone-13-pro-max",
            urunFiyati: 25000
        }
    },
    müsteri :{
        müsteriId: 12
    },
    satici : {
        firmaId: 34,
        firmaAdi: "Apple Türkiye"
    },
    siparisId: 102,
}

/* console.log(urunler.satici.firmaAdi) */

let kdv1 = urunler.satinAlinanUrunler.urun1.urunFiyati * 0.18;
let birinciFiyat = kdv1 + urunler.satinAlinanUrunler.urun1.urunFiyati;

let kdv2 = urunler.satinAlinanUrunler.urun2.urunFiyati * 0.18;
let ikinciFiyat = kdv2 + urunler.satinAlinanUrunler.urun2.urunFiyati;

let kdvliToplam = birinciFiyat + ikinciFiyat;

/* console.log(kdv1,birinciFiyat,kdv2,ikinciFiyat); */

let kdvsizToplam = urunler.satinAlinanUrunler.urun1.urunFiyati + urunler.satinAlinanUrunler.urun2.urunFiyati;

console.log(`KDV'siz toplam ödenen tutar: ${kdvsizToplam}TL`);
console.log(`KDV'li toplam ödenen tutar: ${kdvliToplam}TL`);