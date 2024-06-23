class Duck:
    def walk(self):
        print("This duck is walking")
    def talk(self):
        print("This duck is qwuacking")

class Children:
    def walk(self):
        print("This chicken is walking")
    def talk(self):
        print("This children is clucking")

class Person():
    def catch(self, duck):
        duck.walk()
        duck.talk()
        print("You caught the critter")

duck = Duck()
children = Children()
person = Person()

person.catch(duck)
person.catch(children)