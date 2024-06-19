import os

source = 'text.txt'
dest = 'C:\\Users\\mym\\Desktop\\move.txt'

try:
    if os.path.exists(dest):
        print("There is already a file there")
    else:
        os.replace(source, dest)
        print(source + " was moved")
except FileNotFoundError:
    print(source + " was not found")

# can also move a dir