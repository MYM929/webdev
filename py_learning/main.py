from tkinter import *
from tkinter import messagebox

window = Tk()

#######################################
def click():
    # messagebox.showinfo(title="This is an info message box",
    #                     message="You are a person")
    # while(True):
    #     messagebox.showwarning(title="WARNING!", 
    #                            message="You have a virus")
    # messagebox.showerror(title="ERROR", 
    #                      message="Something went wrong")
    # if messagebox.askokcancel(title="ask ok cancel",
    #                           message="Do you want to do the thing?"):
    #     print("You did a thing")
    # else:
    #     print("You cancel a thing")
    # if messagebox.askretrycancel(title="ask ok cancel",
    #                              message="Do you want to retry the thing?"):
    #     print("You retry a thing")
    # else:
    #     print("You cancel a thing")
    # if messagebox.askyesno(title="ask yes or no",
    #                        message="Do you like cake?"):
    #     print("I like cake")
    # else:
    #     print("why not")
    # answer = messagebox.askquestion(title="ask question",
    #                                 message="do you like pie?")
    # if(answer=="yes"):
    #     print("like")
    # else:
    #     print("not like")
    answer = messagebox.askyesnocancel(title="", message="Do you like to code?", icon=Warning)
    if(answer == True):
        print("like")
    elif(answer == False):
        print("do not")
    else:
        print("hello")    



#######################################
button = Button(window, command=click, text="click me")



#######################################
button.pack()
window.mainloop()