class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal{
  name = "rabbit";

  run(){
    console.log(`This is ${this.name} is running`);
  }
}
class Fish extends Animal{
  name = "fish";
}
class Hawk extends Animal{
  name = "hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;
console.log(rabbit.alive);

rabbit.eat();
rabbit.run();
