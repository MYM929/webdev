let username = window.prompt("Enter your username");

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
/*D
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

extraChars = extraChars.toLowerCase();

username = letter + extraChars;

console.log(username);
*/
