import os

path = "C:\\Users\\mym\\Desktop\\Mavs final\\New Text Document.txt"

if os.path.exists(path):
    print("That location exists!")
    if os.path.isfile(path):
        print("That is a file")
    if os.path.isdir(path):
        print("That is a dir")
else:
    print("That location doesn't exist!")

