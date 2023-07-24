let newNum = 35;
let even = 2;
let odd = 1;
let zero = 0;

/* 10 ile 50 arasında olup olmadığını kontrol et */
if (newNum >= 10 || newNum <= 50) {
    console.log(newNum + " : is between 10 and 50")
}

/* pozitif tek sayı olup olmadığını kontrol et */
if(newNum % even == zero){
    console.log(newNum + ": is an even number")
} else if(newNum % even == odd) {
    console.log(newNum + ": is an odd number")
}

/* x, y, z, sayılarının büyüklük karşılaştırmasını yap */

let x = 35;
let y = 34;
let z = 13;

if (x < y){
    console.log(x + " küçüktür " + y + " dan")
}else if(x > y) {
    console.log(x + " büyüktür " + y + " dan")
}else{
    console.log(x + " eşittir " + y)
}

if (x < y && y < z) {
    console.log("en küçük sayı x dir = " + x)
}else if(y < z && z < x){
    console.log("en küçük sayı y dir = " + y)
}else if(z < x && x < y){
    console.log("en küçük sayı z dir = " + z)
}else if(x == y){
    console.log("x = y")
}else{
    console.log("your number is incorrect")
}