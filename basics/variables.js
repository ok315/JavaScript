const accId = 144
let email = "muhammad@google.com"
var accpsw = "12345"
accCity = "Lhr"
let accState
// accId = 2 -> not allowed
email = "abc@gmail.com"
accpsw = "111"
accCity = "Psw"
console.log(accId);


/*
prefer not to use var bcz of issue in block scope and functional scope
*/

console.table([accId, email, accpsw, accCity, accState])