import os
import shutil

path = "test.txt"

try:
    os.remove(path) # delete file
    # os.rmdir(path) # delete dir
    # shutil.rmtree(path) # delete dir and file in it
except FileNotFoundError:
    print("That file was not found")
except PermissionError:
    print("You do not have permission to delete that")
except OSError:
    print("You can not delete that using that function")
else:
    print(path + " was deleted")