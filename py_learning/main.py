from car import Car

car1 = Car("aaa","bbb",2021,"ccc")
car2 = Car("ddd","eee",2022,"fff")

print(car1.make)
car1.drive()
car1.stop()

Car.wheels = 1
car1.wheels = 2
print(car1.wheels)
print(car2.wheels)
print(Car.wheels)