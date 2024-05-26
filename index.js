const fruits = [{name: "apple",     color: "red",    calories: 95}, 
                {name: "orange",    color: "orange", calories: 45}, 
                {name: "banana",    color: "yellow", calories: 105}, 
                {name: "coconut",   color: "white",  calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

// console.log(fruits[0].name);

// fruits.push({name: "grape", color: "purple", calories: 62});
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.splice(1,2);
// console.log(fruits);

// fruits.forEach(fruit => console.log(fruit.name));
// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);
// const yellewFruits = fruits.filter(fruit => fruit.color==="yellow");
// console.log(yellewFruits);

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories>max.calories ? fruit : max);
console.log(maxFruit);