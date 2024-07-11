from tkinter import *

window = Tk()

#######################################
food = [
    "pizza", "hamburger", "hotdog"
]

x = IntVar()

# pizzaImage = PhotoImage(file="...")
# hamburgerImage = PhotoImage(file="...")
# hotdogImage = PhotoImage(file="...")

# foodImages = [
#     pizzaImage, hamburgerImage, hotdogImage
# ]

def order():
    if(x.get()==0):
        print("Pizza")
    elif(x.get()==1):
        print("hamburger")
    elif(x.get()==2):
        print("hotdog")


#######################################
for index in range(len(food)):
    radio_button = Radiobutton(window, text=food[index],
                               variable=x, value=index,
                               padx=25,
                               font=("Impact", 50),
                               indicatoron=0, width=375,
                               command=order)
    radio_button.pack(anchor=W)

# image=foodImages[index]
# compound="left"

#######################################
window.mainloop()