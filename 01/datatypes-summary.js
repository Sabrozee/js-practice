// Primitive dataType

// 7 types: string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sawan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++ Memory ++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "sawan";

let anotherName = myName; // Copy
anotherName = "sabrozee";

console.log(myName); 
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ylm"
};

let userTwo = userOne; // Original or Refrence

userTwo.email = "sawan@google.com";

console.log(userOne.email);
console.log(userTwo.email);
