/* 
DOM = Document Object Model
    object{} that represents the page you see in the web browser
    and provides you with an API to interact with it.
    web browser constructs the DOM when it loads an HTML document,
    and structures all the elements in a tree-like representation.
    JS can access the DOM to dynamically
    change the content, structure, and style of a web page.
*/

document.getElementById(""); //document is the DOM object, it has a function of getDocumentById()
console.log(document); //display the HTML document
console.dir(document); //display its properties
document.title = "Hello";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "Bro Code";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username==="" ? ` Guest` : " " + username;