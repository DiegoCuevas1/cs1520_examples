def say_hi():
	print("Hi!")

say_hi()
	
def shout(message="Hi"):
	print(f"{message}!")

def new_fun(a, b, c, d=1, e=2, f=3):
	print(a, b, c, d, e, f)

new_fun(10, 11, 12)
new_fun(10, 20, 30, 40, 50, 60)
new_fun(100, 200, 300, f=400)
new_fun(100, 200, 300, 400)

shout()
shout("I love python")
shout(message="And keyword arguments")
