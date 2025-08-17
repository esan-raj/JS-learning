const name = "Esan"
const repoCount = 50
//String Interpolation in this the variables are directly injected to the string

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('Esan-raj-gamer')
// console.log(gameName)
// console.log(gameName.length);

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-6,4)
// console.log(anotherString);

const newStringOne = "   Esan Raj   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://esanraj.com/esan%20raj"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));