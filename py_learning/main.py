import threading
import time

def eat_breakfast():
    time.sleep(3)
    print("You eat breakfast")

def drink_coffee():
    time.sleep(4)
    print("You drink coffee")

def study():
    time.sleep(5)
    print("You study")

thread1 = threading.Thread(target=eat_breakfast, args=())
thread2 = threading.Thread(target=drink_coffee, args=())
thread3 = threading.Thread(target=study, args=())

thread1.start()
thread2.start()
thread3.start()

thread1.join()
thread2.join()
thread3.join()

# eat_breakfast()
# drink_coffee()
# study()





print(threading.active_count())
print(threading.enumerate())
print(time.perf_counter())