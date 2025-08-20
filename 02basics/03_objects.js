//singleton only with constructors

//object literals


const mySym = Symbol("key1");


const JsUser = {
    name:"Esan",
    "full name": "Esan Raj",
    [mySym]: "mykey1",
    age: 23,
    location : "Latehar",
    email:"esanraj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]); //accessing symbol key

JsUser.email = "Esanraj@gmial.com"
// console.log(JsUser.email);
// Object.freeze(JsUser) //freezes the object, no changes allowed

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`);
}
console.log(JsUser.greeting()); //undefined, as we cannot add new properties after freeze
console.log(JsUser.greetingTwo()); //undefined, as we cannot add new properties after freeze

