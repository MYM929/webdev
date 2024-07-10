from tkinter import *

window = Tk()

##########################################################
def submit():
    username = entry.get()
    print(username)
    entry.config(state=DISABLED)

def delete():
    entry.delete(0, END)

def backspace():
    entry.delete(len(entry.get())-1, END)

entry = Entry(window, font=("Arial", 50), fg="#00FF00", bg="black",
              show="*")
entry.insert(0, 'sssssss')

submit_button = Button(window, text="submit", command=submit)
delete_button = Button(window, text="delete", command=delete)
backspace_button = Button(window, text="backspace", command=backspace)

##########################################################
entry.pack(side=LEFT)
submit_button.pack(side=RIGHT)
delete_button.pack(side=RIGHT)
backspace_button.pack(side=RIGHT)
window.mainloop()

