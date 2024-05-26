class Address{
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class Person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const person1 = new Person("Spspsp", 30, 
                           "123 Conch St.", "cdc", "Int. Waters");
const person2 = new Person("bgndn", 30, 
                           "128 Conch St.", "cdc", "Int. Waters");

console.log(person1.address.street);





/* 
const person = {
  fullName: "Sposs",
  age: 30,
  isStudent: true,
  hobbies: ["Karate", "jellyfishing", "cooking"],

  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water"
  }
}

console.log(person.fullName);
console.log(person.hobbies);
console.log(person.address.street);

for(const property in person.address){
  console.log(person.address[property]);
} 
*/