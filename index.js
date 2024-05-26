const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => Math.pow(element, 2));
const evenNums = numbers.filter((element) => element%2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(squares);
console.log(evenNums);
console.log(total);





/*  
setTimeout(() => console.log("Hello"), 3000); 
*/

/* 
const hello = (name,age) => {console.log(`Hello ${name}`)
                             console.log(`You are ${age} years old`)};

hello("Bro", 25); 
*/

/* 
const hello = () => console.log("Hello");

setTimeout(hello, 3000);
*/