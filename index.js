// const fruits = document.querySelectorAll(".fruits");

// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

// foods[0].style.backgroundColor = "yellow";
// foods[1].style.backgroundColor = "yellow";

// console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});



/* 
const element1 = document.querySelector(".fruits");
element1.style.backgroundColor = "yellow";

const element2 = document.querySelector("h4");
element2.style.backgroundColor = "yellow";

const element3 = document.querySelector("ul");
element3.style.backgroundColor = "yellow";

const element4 = document.querySelector("ol");
console.log(element4); //return null  
*/


/* 
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

// h4Elements[0].style.backgroundColor = "yellow";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }

// for(let liElement of liElements){
//     liElement.style.backgroundColor = "lightgreen";
// }

Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
}); 
*/


/* 
const fruits = document.getElementsByClassName("fruits");
console.log(fruits);

// fruits[0].style.backgroundColor = "yellow";
// fruits[1].style.backgroundColor = "blue";

// for(let fruit of fruits){
//     fruit.style.backgroundColor = "yellow";
// }

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
}); 
*/




/* 
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); 
*/

/*
1. document.getElementById()       //element or null
2. document.getElementsClassName() //HTML collection
3. document.getElementsByTagName   //HTML collection
4. document.querySelector()        //element or null
5. document.querySelectorAll()     //nodelist
*/   