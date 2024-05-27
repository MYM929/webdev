
let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => {window.alert("Hello");}, 3000);
    console.log("STARTED");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
}



/* 
const timeoutId = setTimeout(() => {window.alert("Hello");}, 3000);
clearTimeout(timeoutId); 
*/

/*
setTimeout(() => {window.alert("Hello");}, 3000);
*/

/* 
function sayHello(){
    window.alert("Hello");
} 

setTimeout(sayHello, 3000);
*/