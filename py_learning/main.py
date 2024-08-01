from tkinter import *
from PIL import Image, ImageTk
import time


WIDTH = 500
HEIGHT = 500
xVelocity = 3
yVelocity = 2


window = Tk()

#######################################

canvas = Canvas(window, width=WIDTH, height=HEIGHT)



# Load the image using Pillow
original_image = Image.open('py_learning/image.png')

# Scale the image to 20%
width, height = original_image.size
scaled_image = original_image.resize((int(width * 0.2), int(height * 0.2)))

# Convert the image to PhotoImage
myImage = ImageTk.PhotoImage(scaled_image)

imageCanvas = canvas.create_image(0, 0, image=myImage, anchor=NW)

canvas.pack()

image_width = myImage.width()
image_height = myImage.height()

while True:
    coordinates = canvas.coords(imageCanvas)
    print(coordinates)
    if(coordinates[0] >= WIDTH-image_width or coordinates[0] < 0):
        xVelocity = -xVelocity
    if(coordinates[1] >= HEIGHT-image_height or coordinates[1] < 0):
        yVelocity = -yVelocity
    canvas.move(imageCanvas, xVelocity, yVelocity)
    window.update()
    time.sleep(0.01)


#######################################

window.mainloop()
