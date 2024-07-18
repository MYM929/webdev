from tkinter import *

window = Tk()

#######################################
def create_window():
    # new_window = Toplevel()
    new_window = Tk()
    window.destroy()
#######################################
Button(window, text="create new window", command=create_window).pack()

#######################################
window.mainloop()