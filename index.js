const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

/*
const fullName = "Bro Code";

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1); //+1 to remove that space

console.log(firstName);
console.log(lastName);
*/

/*
slice(0, 3); //2nd digit: exclusive //result: Bro
slice(-2); //result: de
*/
