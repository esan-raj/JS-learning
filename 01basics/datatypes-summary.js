//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Iron Man", "Hulk", "dogesh"]; //Array typeof return type will be object
let myObj = {
    name: "Esan",
    age: 22,
} // Object typeof return type will be object

const myFunction = function(){
    console.log("Hello world");
}//function typeof return type will be function (object)

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3