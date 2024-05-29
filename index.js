let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        console.log(buttons);
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});


/* 
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

console.log(buttons);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons); 
*/


/* 
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
}); 
*/



/* 
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
}); 
*/



// console.log(buttons);

/* 
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😘";
}) 
*/