const accountId = 1234;
let accountEmail = "sawan.shiv50@gmail.com";
var accountPassword = "1234";
accountCity = "Roorkee";
let accountState;  // undefined

// accountId = 2; // not allowed

console.log(accountId);

/* 
Prefer not use var
Because of issue in block scope and functional scope 
*/

accountEmail = "sabrozee123@gmail.com";
accountPassword = "4321";
accountCity = "Saharanpur";

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // the output will be in table form
