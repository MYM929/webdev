from tkinter import *


window = Tk()

#######################################
def openFile():
    print("File has been open")
def saveFile():
    print("File has been save")

def cut():
    print("Cut")
def copy():
    print("Copy")
def paste():
    print("Paste")
#######################################
menubar = Menu(window)
window.config(menu=menubar)

fileMenu = Menu(menubar, tearoff=0, font=("MV Boli", 15))
menubar.add_cascade(label="File", menu=fileMenu)
fileMenu.add_command(label="Open", command=openFile)
fileMenu.add_command(label="Save", command=saveFile)
fileMenu.add_separator()
fileMenu.add_command(label="Exit",command=quit)

editMenu = Menu(menubar, tearoff=0, font=("MV Boli", 15))
menubar.add_cascade(label="Edit", menu=editMenu)
editMenu.add_command(label="Cut", command=cut)
editMenu.add_command(label="Copy", command=copy)
editMenu.add_command(label="Paste", command=paste)

# openImage = PhotoImage(file="...")
# saveImage = PhotoImage(file="...")
# exitImage = PhotoImage(file="...")
# image=openImage, compound='left'
# image=saveImage, compound='left'
# image=exitImage, compound='left'

#######################################

window.mainloop()