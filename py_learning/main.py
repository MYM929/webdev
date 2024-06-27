students = [100,90,80,70,60,50,40,30,20,10]
# passed_students = [i for i in students if i>=60]
passed_students = [i if i>=60 else "Fail" for i in students]
print(passed_students)


# students = [100,90,80,70,60,50,40,30,20,10]
# passed_students = list(filter(lambda x:x>=60, students))
# print(passed_students)



# squares = [i*i for i in range(1,11)]
# print(squares)



# squares = []
# for i in range(1, 11):
#     squares.append(i*i)
# print(squares)