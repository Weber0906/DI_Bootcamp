# Exercise 1
# Print the following output in one line of code:
# Hello world
# Hello world
# Hello world
# Hello world
# I love python
# I love python
# I love python
# I love python

print(('Hello world\n' * 4) + ('I love python\n' * 4))

# Exercise 2 : What Is The Season ?

# Instructions

# Ask the user to input a month (1 to 12).
# Display the season of the month received :
# Spring runs from March (3) to May (5)
# Summer runs from June (6) to August (8)
# Autumn runs from September (9) to November (11)
# Winter runs from December (12) to February (2)

season = int(input('To know what season enter a month 1 - 12: '))

if 12 >= season or season <= 2:
    print("It's winter outside")
elif 3 >= season or season <= 5:
    print("It's spring outside")
elif 6 >= season or season <= 8:
    print("It's summer outside")
elif 9 >= season or season <= 11:
    print("It's autumn outside")
else:
    print('Wrong number')
