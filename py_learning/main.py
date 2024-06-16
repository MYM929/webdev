temp = int(input("What is the temp>: "))

if not(temp>=0 and temp<= 30):
    print("The temp is good today")
elif not(temp<0 or temp>30):
    print("The temp is bad today")