from tkinter import *

window = Tk()

# photo = PhotoImage(file='...........')

label = Label(
    window, 
    text="Hello World", 
    font=('Arial', 40, 'bold'),
    fg='green',
    bg='black',
    relief=RAISED,
    # relief=SUNKEN,
    bd=10,
    padx=20,
    pady=20,
    # image=photo,
    # compound='bottom'
)
label.pack()
# label.place(x=0, y=0)



window.mainloop()