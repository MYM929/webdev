const people = [{name: "aaa", age: 30, gpa: 3.0},
                {name: "bbb", age: 37, gpa: 1.5},
                {name: "ccc", age: 51, gpa: 2.5},
                {name: "ddd", age: 27, gpa: 4.0},];

people.sort((a,b) => a.age - b.age);
console.log(people);

people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);


/* 
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1,10,2,9,3,8,4,7,5,6];

fruits.sort();
numbers.sort((a, b) => a-b);
numbers.sort((a, b) => b-a); //reverse

console.log(fruits);
console.log(numbers);
*/