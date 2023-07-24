let url = "https://www.sadikturan.com/";
let kursAdi = "Komple Web Geliştirme Kursu";

/* URL KAC KARAKTER */
console.log(url.length);

/* KURSADI KAC KELIME */
console.log(kursAdi.split(" ").length)


/* STARTSWITH */
if(url.startsWith("https")){
    console.log("evet https ile başlıyor")
}else{
    console.log("hayır")
}

/* INCLUDES */
if(kursAdi.includes("Eğitimi")){
    console.log("evet Eğitimi kelimesi var")
} else{
    console.log("hayır Eğitimi kelimesi yok")
}

let newKurs = kursAdi.toLowerCase().replaceAll(" ","-")
let kursor = newKurs.replace("ş","s")


let newString = url + kursor
console.log(newString)