let fruits = ["apple", "orange", "banana", "coconut"];

function display(element)
{
  console.log(element);
}
function upperCase(element, index, array)
{
  array[index] = element.toUpperCase();
}
function lowerCase(element, index, array)
{
  array[index] = element.toLowerCase();
}
function capitalize(element, index, array)
{
  array[index] = element[0].toUpperCase() + element.slice(1);
}

fruits.forEach(capitalize);
fruits.forEach(display);

/*
let numbers = [1,2,3,4,5];

function display(element)
{
  console.log(element);
}
function double(element, index, array)
{
  array[index] = element*2;
}

numbers.forEach(double);
numbers.forEach(display);
*/