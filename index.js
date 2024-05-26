class Person{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstname){
    if(typeof newFirstname === "string" && newFirstname.length>0){
      this._firstName = newFirstname;
    }
    else{
      console.error("First name must be a non-empty string");
    }
  }
  set lastName(newLastname){
    if(typeof newLastname === "string" && newLastname.length>0){
      this._lastname = newLastname;
    }
    else{
      console.error("Last name must be a non-empty string");
    }
  }
  set age(newAge){
    if(typeof newAge === "number" && newAge>=0){
      this._age = newAge;
    }
    else{
      console.error("Age must be a non-neg number");
    }
  }

  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastname;
  }
  get fullName(){
    return this._firstName + " " + this._lastname;
  }
  get age(){
    return this._age;
  }
}

const person = new Person("aaa", "bbb", 30);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);



/* 
class Rectangle{
  constructor(width, heigit){
    this.width = width;
    this.heigit = heigit;
  }

  set width(newWidth){
    if(newWidth > 0){
      this._width = newWidth; 
    }
    else{
      console.error("Width must be a pos number");
    }
  }
  set heigit(newHeight){
    if(newHeight > 0){
      this._height = newHeight;
    }
    else{
      console.error("Height must be a pos number");
    }
  }
  get width(){
    return `${this._width.toFixed(1)} cm`;
  }
  get heigit(){
    return `${this._height.toFixed(1)} cm`;
  }
  get area(){
    return `${(this._width * this._height).toFixed(1)} cm^2`;
  }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 3;
rectangle.heigit = 6;

console.log(rectangle.width);
console.log(rectangle.heigit);
console.log(rectangle.area); 
*/