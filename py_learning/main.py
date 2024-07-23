from tkinter import *


window = Tk()

#######################################
def do(event):
    # print("did " + event.keysym)
    label.config(text=event.keysym)

#######################################
# window.bind("<Key>", do)
window.bind("<Key>", do)
label = Label(window, font=("Helvetica", 100))


#######################################

label.pack()
window.mainloop()