import smtplib

sender = "yongming.mai.929@gmail.com"
receiver = "maiyongming929@gmail.com"
password = "abc5258082"
subject = "Py email test"
body = "Hello World"

#header
message = f"""From: me {sender}
To: you {receiver}
Subject: {subject} \n
{body}
"""

server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()

server.login(sender, password)
print("Logged in...")

server.sendmail(sender, receiver, message)
print("Email has been sent!")