const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// document.body.append(newListItem);
document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[2]);

document.getElementById("fruits").removeChild(newListItem);


/* 
const newH1 = document.createElement("h1");
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box1");
// document.body.insertBefore(newH1, box1);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// document.body.removeChild(newH1);

document.getElementById("box1").removeChild(newH1); 
*/