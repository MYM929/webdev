const person1 = {
  firstName: "aaa",
  lastName: "bbb",
  age: 30,
  job: "Fry Cook",
}
const person2 = {
  firstName: "ccc",
  lastName: "ddd",
  age: 34,
}

function displayPerson({firstName, lastName, age, job="Unemployed"}){
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(job);
}

displayPerson(person2);





/* 
const person1 = {
  firstName: "aaa",
  lastName: "bbb",
  age: 30,
  job: "Fry Cook",
}
const person2 = {
  firstName: "ccc",
  lastName: "ddd",
  age: 34,
}

// const {firstName, lastName, age, job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

const {firstName, lastName, age, job="Unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job); 
*/



/* 
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors); 
*/



/* 
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); 
*/


/* 
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b); 
*/