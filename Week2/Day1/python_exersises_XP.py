# Exercise 1 : Hello World
#Instruction
#Print the following output in one line of code:

print("Hello world"); print("Hello world"); print("Hello world"); print("Hello world"); 

# Exercise 2 : Some Math
# Instructions
# Write code that calculates the result of: (99^3)*8 (meaning 99 to the power of 3, times 8).

x = 99
y = 8
print((x ** 3) * y)

# Exercise 3 : What Is The Output ?
# Instructions
# Predict the output of the following code snippets:
# >>> 5 < 3
# >>> 3 == 3
# >>> 3 == "3"
# >>> "3" > 3
# >>> "Hello" == "hello"

# Answer for exercise 3
# False
# True
# False
# TypeError
# False

# 🌟 Exercise 4 : Your Computer Brand
# Instructions
# Create a variable called computer_brand which value is the brand name of your computer.
# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

computer_brand = "MacBook Air"
print("I have a " + computer_brand + " computer")

# 🌟 Exercise 5 : Your Information
# Instructions
# Create a variable called name, and set it’s value to your name.
# Create a variable called age, and set it’s value to your age.
# Create a variable called shoe_size, and set it’s value to your shoe size.
# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.
# Have your code print the info message.
# Run your code

name = "Nikolas"
age = "42"
shoe_size = "43"
info = "Hi, my name is " + name + ". " "I'm " + age + " years old. " "I have a shoesize of " + shoe_size + "."
print(info)

# 🌟 Exercise 6 : A & B
# Instructions
# Create two variables, a and b.
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

a = 10
b = 5
if a > b: 
    print("Hello World") 

#     Exercise 7 : Odd Or Even
# Instructions
# Write code that asks the user for a number and determines whether this number is odd or even.

num = int(input("Enter a number: "))
if (num % 2) == 0:
   print("{0} is Even".format(num))
else:
   print("{0} is Odd".format(num))

# 🌟 Exercise 8 : What’s Your Name ?
# Instructions
# Write code that asks the user for their name and determines whether or not you have the same name, 
# print out a funny message based on the outcome.

print("Enter Your name: ")
a =input()
if a == "Nikolas":
    print("We got the same name dude!")
else:
    print("Your name ois different")

# 🌟 Exercise 9 : Tall Enough To Ride A Roller Coaster
# Instructions
# Write code that will ask the user for their height in inches.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride. 
#


a = int(input("Input your height:"))
b = (a * 2.54)
if b > 145:
    print("You're tall enough to ride")
else:
    print("You need to grow mate!")