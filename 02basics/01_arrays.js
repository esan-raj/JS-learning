//array

const myArr = [0,1,2,3,4,5,6]
const heros = ["Iron Man", "Hulk","Black Panther","Wanda"]

const myArr2 = new Array(23,24,25,65,11)

// console.log(heros[1]);

//Array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9) 
// myArr.shift() 

// console.log(myArr.includes(9)); //returns boolean
// console.log(myArr.indexOf(3)); //returns number if exist and -1 for rest

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

//slice and splice
console.log("------------------");

console.log("A",myArr);

const myn1 = myArr.slice(1,3) //last index not included
console.log(myn1);
console.log("B",myArr);
console.log("--------------------------");

const myn2 = myArr.splice(1,3) //last index included and it modifies the orginal array also
console.log("C",myArr);
console.log(myn2);


