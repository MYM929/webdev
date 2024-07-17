from tkinter import *
from tkinter import filedialog

window = Tk()

#######################################
def openFile():
    filePath = filedialog.askopenfilename(initialdir="C:\\Users\\", 
                                          title="Open File",
                                          filetypes=(("text files", "*.txt"), 
                                                     ("all files", "*.*")))
    # print(filePath)
    file = open(filePath, "r")
    print(file.read())
    file.close()

#######################################
button = Button(window, text="Open", command=openFile)

#######################################
button.pack()
window.mainloop()