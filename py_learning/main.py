from tkinter import *

window = Tk()

#######################################
def submit():
    food = []

    for index in listbox.curselection():
        food.insert(index, listbox.get(index))
    print("You have ordered: ")
    # print(listbox.get(listbox.curselection()))
    for index in food:
        print(index)

def add():
    listbox.insert(listbox.size(), entryBox.get())
    listbox.config(height=listbox.size())

def delete():
    for index in reversed(listbox.curselection()):
        listbox.delete(index)
    # listbox.delete(listbox.curselection())
    listbox.config(height=listbox.size())


#######################################
listbox = Listbox(window, 
                  bg="#f7ffde",
                  font=("Constantia", 35),
                  width=12,
                  selectmode=MULTIPLE)
entryBox = Entry(window)
submitButton = Button(window, text="submit", command=submit)
addButton = Button(window, text="add", command=add)
deleteButton = Button(window, text="delete", command=delete)


listbox.insert(1, "pizza")
listbox.insert(2, "pasta")
listbox.insert(3, "garlic bread")
listbox.insert(4, "soup")
listbox.insert(5, "salad")

listbox.config(height=listbox.size())

#######################################
listbox.pack()
entryBox.pack()
submitButton.pack()
addButton.pack()
deleteButton.pack()
window.mainloop()