function Car(make, model, year, color)
{
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color,
  this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Ford2", "Mustang", 2024, "red");

console.log(car1.make);
console.log(car2.make);
car1.drive();