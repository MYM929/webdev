from tkinter import *

window = Tk()

#######################################
def submit():
    print(str(scale.get()))


#######################################
# hotImage = PhotoImage(file="...")
# hotLabel = Label(image=hotImage)
# coldImage = PhotoImage(file="...")
# coldLabel = Label(image=coldImage)

scale = Scale(window, from_=0, to=100,
              length=600,
              orient=VERTICAL,
              font=('Consolas', 20),
              tickinterval=10,
              showvalue=0,
              troughcolor="#69EAFF",
              fg="#FF1C00", bg="black")
scale.set( 
    (scale['from']-scale['to'])/2 + scale['to']
)
button = Button(window, text="submit", command=submit)
#######################################
# hotLabel.pack()
scale.pack()
button.pack()
# coldLabel.pack()
window.mainloop()