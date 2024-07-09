import threading
import time

def timer():
    print()
    print()
    count = 0
    while True:
        time.sleep(1)
        count += 1
        print("Logged in for: ", count, " seconds")

x = threading.Thread(target=timer, daemon=True)
# x.setDaemon(True)
x.start()
# x.isDaemon()

answer = input("Do you wish to exit?")

# def timer():
#     print()
#     print()
#     count = 0
#     while True:
#         time.sleep(1)
#         count += 1
#         print("Logged in for: ", count, " seconds")

# x = threading.Thread(target=timer)
# x.start()

# answer = input("Do you wish to exit?")