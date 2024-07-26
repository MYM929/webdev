from tkinter import *


window = Tk()

#######################################

#######################################
window.geometry("500x500")

myImage = PhotoImage(file='image.jpg')
label = Label(window, image=myImage)
label.place(x=0,y=0)

#######################################


window.mainloop()