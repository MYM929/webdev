from tkinter import *
from tkinter import filedialog

window = Tk()

#######################################
def saveFile():
    file = filedialog.asksaveasfile(initialdir="C:\\Users",
                                    defaultextension='.txt',
                                    filetypes=[
                                        ("Text file", ".txt"),
                                        ("HTML file", ".html"),
                                        ("All files", ".*"),
                                    ])
    if file is None:
        return
    # fileText = str(text.get(1.0, END))
    fileText = input("Enter some text: ")
    file.write(fileText)
    file.close()
#######################################
button = Button(window, text="Save", command=saveFile)
text = Text(window)

#######################################
button.pack()
text.pack()
window.mainloop()