/* Exams */
/* let visa1 = parseInt(prompt("Your first visa note: ")) 
let visa2 = parseInt(prompt("Your second visa note: ")) 
let final = parseInt(prompt("Your final note: "))  */

let visa1 = 36 
let visa2 = 49 
let final = 51 

let avarageNotes = (visa1 + visa2 + final) / 3

let passNote = 50

if(avarageNotes >= passNote && final >= 50){
    console.log("Your avarage is: " + avarageNotes.toFixed()  + ". You are succesfull!")
}else if(final >= 70 && avarageNotes <= 50){
    console.log("Your point is: " + avarageNotes.toFixed()  + ". Your final is: " + final + " You're succesfull!")
}else{
    console.log("Your avarage is: " + avarageNotes.toFixed() + ". You can't pass it! Final exam must be above: " + passNote)
}