const accountID = 14453
let accountemail = "kittycat@gmail.com"
var accountPass = "12345"
accountCity = "Patna"  // ❌ allowed (creates a global variable) but not a good practice
let accountState; // value will be undefined until assigned

/*
❌ we cannot reassign a const variable once declared
⚠️ avoid using var because of its issues with block scope & functional scope
👉 prefer let (for variables that can change) and const (for fixed values)
*/

console.log(accountID);
console.table([accountID, accountemail, accountPass, accountCity, accountState])
