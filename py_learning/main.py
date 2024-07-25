from tkinter import *


window = Tk()

#######################################
def drag(event):
    widget = event.widget
    widget.startX = event.x
    widget.startY = event.y

def motion(event):
    widget = event.widget
    x = widget.winfo_x() - widget.startX + event.x
    y = widget.winfo_y() - widget.startY + event.y
    widget.place(x=x, y=y)

#######################################
label = Label(window, bg="red", width=10, height=5)
label.place(x=0, y=0)

label.bind("<Button-1>", drag)
label.bind("<B1-Motion>", motion)

label2 = Label(window, bg="blue", width=10, height=5)
label2.place(x=100, y=0)

label2.bind("<Button-1>", drag)
label2.bind("<B1-Motion>", motion)

#######################################


window.mainloop()