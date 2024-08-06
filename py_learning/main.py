from tkinter import *
from time import *

window = Tk()

def update():
    timeStr = strftime("%I:%M:%S %p")
    timeLabel.config(text=timeStr)
    dayStr = strftime("%A")
    dayLabel.config(text=dayStr)
    dateStr = strftime("%B %d, %Y")
    dateLabel.config(text=dateStr)


    window.after(1000, update)
 
timeLabel = Label(window, font=("Arial", 50), fg="#00FF00", bg="black")
timeLabel.pack()

dayLabel = Label(window, font=("Ink Free", 25))
dayLabel.pack()

dateLabel = Label(window, font=("Ink Free", 30))
dateLabel.pack()

update()




window.mainloop()