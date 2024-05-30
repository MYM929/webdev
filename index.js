/*
JSON = (JS Object Notation) data-interchange format
       Used for exchanging data between a server and a web app
       JSON files {key:value} OR [value1, value2, value3]

       JSON.stringify() = converts a JS object to a JSON string
       JSON.parse() = converts a JSON string to a JS Object
*/

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
       "name": "Spongebob", 
       "age": 30,
       "isEmployed": true,
       "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};

const jsonString1 = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);

console.log(names);
console.log(jsonString1);

console.log(person);
console.log(jsonString2);
