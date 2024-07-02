import time
time_tuple = (2020, 4, 20, 4, 20, 0, 0, 0, 0)
time_str = time.asctime(time_tuple)
# time_str = time.mktime(time_tuple)
print(time_str)

# time_str = "20 April, 2020"
# time_obj = time.strptime(time_str, "%d %B, %Y")
# print(time_obj)

# # print(time.ctime(10000000))
# # print(time.time())
# # print(time.ctime(time.time()))
# time_obj = time.localtime()
# time_obj1 = time.gmtime()

# # print(time_obj)

# local_time = time.strftime("%B %d %Y %H:%M:%S", time_obj)
# print(local_time)