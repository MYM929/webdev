const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function(element){
  return Math.pow(element, 2);
});
const evenNums = numbers.filter(function(element){
  return element%2 === 0;
});
const total = numbers.reduce(function(accumulator, element){
  return accumulator + element;
});

console.log(squares);
console.log(evenNums);
console.log(total);





/* 
setTimeout(function () {
  console.log("Hello");
}, 3000); 
*/

/* 
const hello = function(){
  console.log("Hello");
}

setTimeout(hello, 3000);
*/