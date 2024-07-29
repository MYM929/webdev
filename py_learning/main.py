from tkinter import *
import os


window = Tk()

#######################################

#######################################
window.geometry("500x500")

myImage = PhotoImage(file='py_learning/image.png')
label = Label(window, image=myImage)
label.place(x=0,y=0)

print(os.listdir())



#######################################


window.mainloop()