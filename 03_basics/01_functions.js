function sayMyName(){
    console.log("My name is Esan Raj");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;
    return number1+number2; // This line will never be executed because of the return above
    
}

const result = addTwoNumbers(2,5); // 5
// console.log(result); // 7

function loginUserMessage(username = "Esan Raj"){
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Neelam")); // Esan Raj just logged in   
// console.log(loginUserMessage()); // Esan Raj just logged in   

function calculateCartPrice(...num1){//rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user={
    username:"esan",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user); // Username is esan and price is 199

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));