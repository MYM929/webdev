from tkinter import *


window = Tk()

#######################################
def do(event):
    print("did " + str(event.x) + " " + str(event.y))

#######################################
# window.bind("<Button-1>", do)
# window.bind("<Button-2>", do)
# window.bind("<Button-3>", do)
# window.bind("<ButtonRelease>", do) 
# window.bind("<Enter>", do) 
# window.bind("<Leave>", do) 
window.bind("<Motion>", do) 

#######################################


window.mainloop()