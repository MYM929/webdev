from tkinter import *
from PIL import Image, ImageTk
import os

window = Tk()

#######################################
def move_up(event):
    label.place(x=label.winfo_x(), y=label.winfo_y()-10)
def move_down(event):
    label.place(x=label.winfo_x(), y=label.winfo_y()+10)
def move_left(event):
    label.place(x=label.winfo_x()-10, y=label.winfo_y())
def move_right(event):
    label.place(x=label.winfo_x()+10, y=label.winfo_y())


#######################################

window.geometry("1000x1000")

window.bind("<w>", move_up)
window.bind("<s>", move_down)
window.bind("<a>", move_left)
window.bind("<d>", move_right)




# Load the image using Pillow
original_image = Image.open('py_learning/image.png')

# Scale the image to 20%
width, height = original_image.size
scaled_image = original_image.resize((int(width * 0.2), int(height * 0.2)))

# Convert the image to PhotoImage
myImage = ImageTk.PhotoImage(scaled_image)

label = Label(window, image=myImage)
label.place(x=0, y=0)

# print(os.listdir())

#######################################

window.mainloop()
