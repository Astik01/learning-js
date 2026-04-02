const accountID = 14453
let accountemail = "kittycat@gmail.com"
var accountPass = "12345"
accountCity = "Patna"  // is possible but not a good practice
let accountState; // is undefined

/*
we cannot update a value declared in const 
avoid using var because of it's issue in block scope and functional scope
use let instead 
*/

accountemail = "cat@microsoft.com"
accountPass = "132945"
accountCity = "Kolkata" // to update
// console.log(accountID);
console.table([accountID, accountemail, accountPass, accountCity, accountState]) // 
