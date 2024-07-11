from tkinter import *

window = Tk()

#######################################
x = IntVar()

# py_photo = PhotoImage(file="...")

def display():
    if(x.get()==1):
        print("Agree")
    else:
        print("Not Agree")

#######################################
check_button = Checkbutton(window, text="I agree to you", 
                           variable=x, onvalue=1, offvalue=0,
                           command=display,
                           font=("Arial", 20),
                           fg="#00FF00", bg="black",
                           activeforeground="#00FF00", activebackground="black",
                           padx=25, pady=10)

# image=py_photo
# compound='left'


#######################################
check_button.pack()
window.mainloop()