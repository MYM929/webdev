friends = [
    ("aaa", 19),
    ("bbb", 18),
    ("ccc", 17),
    ("ddd", 16),
    ("eee", 21),
    ("fff", 20)
]

age = lambda data: data[1]>=18

drinking_buddies = list(filter(age, friends))

for i in drinking_buddies:
    print(i)