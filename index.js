const person1 = {
  firstName: "aaa",
  lastName: "bbb",
  age: 30,
  isEmployed: true,

  sayHello: function(){console.log("Hello 1")},
}

const person2 = {
  firstName: "ccc",
  lastName: "ddd",
  age: 42,
  isEmployed: false,

  sayHello: () => console.log("Hello 2"),
}


console.log(person1.firstName);
person1.sayHello();