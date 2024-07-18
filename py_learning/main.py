from tkinter import *
from tkinter import ttk

window = Tk()

#######################################

#######################################
notebook = ttk.Notebook(window)

tab1 = Frame(notebook)
tab2 = Frame(notebook)

notebook.add(tab1, text="Tab 1")
notebook.add(tab2, text="Tab 2")

Label(tab1, text="this is tab 1", width=50, height=25).pack()
Label(tab2, text="this is tab 2", width=50, height=25).pack()
#######################################
notebook.pack(expand=True, fill="both")
window.mainloop()