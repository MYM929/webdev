usernames = [
    "Dude", "Bro", "Mister"
]
passwords = (
    "p@ssword", "abc123", "Guest"
)
login_date = [
    "1/1/2021", "1/2/2021", "1/3/2021"
]

users = zip(usernames, passwords, login_date)
# users = list(zip(usernames, passwords))
print(type(users))

for i in users:
    print(i)

# for key,value in users.items():
#     print(key + " : " + value)