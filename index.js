/*
JSON = (JS Object Notation) data-interchange format
       Used for exchanging data between a server and a web app
       JSON files {key:value} OR [value1, value2, value3]

       JSON.stringify() = converts a JS object to a JSON string
       JSON.parse() = converts a JSON string to a JS Object
*/

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error))
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error))
fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value))
    .catch(error => console.log(error))
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.log(error))


/* 
const jsonNames  = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 20, "isEmployed": true}, 
                    {"name": "Patrick", "age": 34, "isEmployed": false}, 
                    {"name": "Squidward", "age": 50, "isEmployed": true},
                    {"name": "Sandy", "age": 27, "isEmployed": false}]`;

const parseData1 = JSON.parse(jsonNames);
const parseData2 = JSON.parse(jsonPerson);
const parseData3 = JSON.parse(jsonPeople);

console.log(parseData1);
console.log(parseData2);
console.log(parseData3); 
*/


/* 
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {
       "name": "Spongebob", 
       "age": 30,
       "isEmployed": true,
       "hobbies": ["Jellyfishing", "Karate", "Cooking"]
};
const people = [{
    "name": "Spongebob", 
    "age": 20,
    "isEmployed": true
}, 
{
    "name": "Patrick", 
    "age": 34,
    "isEmployed": false
}, 
{
    "name": "Squidward", 
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy", 
    "age": 27,
    "isEmployed": false
}
];

const jsonString1 = JSON.stringify(names);  //array of strings
const jsonString2 = JSON.stringify(person); //one object
const jsonString3 = JSON.stringify(people); //array of objects

console.log(names);
console.log(jsonString1);

console.log(person);
console.log(jsonString2);

console.log(people);
console.log(jsonString3); 
*/