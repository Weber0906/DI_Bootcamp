
# Exercise 1: Concatenate Lists
# Instructions
# Write code that concatenates two lists together without using the + sign.

# a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# b = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
# a.extend(b)
# print(a)

# Exercise 2: Range Of Numbers
# Instructions
# Create a loop that goes from 1500 to 2500 and prints all multiples of 5 and 7.

# for i in range(1500, 2501):
#     if i % 5 == 0 and i % 7 == 0:
#         print(i)


# Exercise 3: Check The Index
# Instructions
# Using this variable
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# Ask a user for their name, if their name is in the names list print out the index of the first occurence of the name.
# Example: if input is 'Cortana' we should be printing the index 1

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# n = input(str('Enter your name: '))

# if n in names:
#     index = names.index(n)
#     print(f"Index of {n} is {index}")
# else:
#     print("name is not in the list")


# Exercise 4: Greatest Number

# Instructions

# Ask the user for 3 numbers and print the greatest number.
#     Test Data
#     Input the 1st number: 25
#     Input the 2nd number: 78
#     Input the 3rd number: 87

#     The greatest number is: 87

# my_list = []
# my_list.append(input('Enter your 1st number: '))
# my_list.append(input('Enter your 2nd number: '))
# my_list.append(input('Enter your 3rd number: '))
# greatest_number = max(my_list)
# print(f"The greatest number is: {greatest_number}")


# Exercise 5: The Alphabet

# Instructions

# Create a string of all the letters in the alphabet
# Loop over each letter and print a message that contains the letter
# and whether its a vowel or a consonant.

# a_b_c = "abcdefghijklmnopqrstuvwxyz"

# for char in a_b_c:
#     if char in "aeiou":
#         print(f"{char} is a vowel")
#     else:
#         print(f"{char} is a consonant")

# Exercise 6: Words And Letters

# Instructions

# Ask a user for 7 words, store them in a list named words.
# Ask the user for a single character, store it in a variable
# called letter.
# Loop through the words list and print the index of the first
# appearence of the letter variable in each word of the list.
# If the letter doesn’t exist in one of the words, print a
# friendly message with the word and the letter.

# words = []

# words.append(input("Enter 1st word: "))
# words.append(input("Enter 2nd word: "))
# words.append(input("Enter 3rd word: "))
# words.append(input("Enter 4th word: "))
# words.append(input("Enter 5th word: "))
# words.append(input("Enter 6th word: "))
# words.append(input("Enter 7th word: "))

# letter = input("Enter single character: ")

# for char in words:
#     if letter in char:
#         print(
#             f"index of the 1st appearance of letter {letter} in {char} is:", char.index(letter))
#     else:
#         print(f" there's no letter {letter} in word {char}")

# Exercise 7:

# Instructions

# Create a list of numbers from one to one million and then
# use min() and max() to make sure your list actually starts
# at one and ends at one million. Use the sum() function to see
# how quickly Python can add a million numbers.

# my_list = list(range(1, 1000001))

# print(min(my_list))
# print(max(my_list))
# print(sum(my_list))

# Exercise 8 : List And Tuple

# Instructions

# Write a program which accepts a sequence of comma-separated numbers.
# Generate a list and a tuple which contain every number.
# Suppose the following input is supplied to the
# program: 34,67,55,33,12,98

# Then, the output should be:

# ['34', '67', '55', '33', '12', '98']
# ('34', '67', '55', '33', '12', '98')

# my_numbers = "34, 67, 55, 33, 12, 98"

# my_list = my_numbers.split(",")

# my_tuple = tuple(map(int, my_list))

# print(my_list)
# print(my_tuple)

# Exercise 9 : Random Number

# Instructions

# Ask the user to input a number from 1 to 9 (including).
# Get a random number between 1 and 9. Hint: random module.
# If the user guesses the correct number print a message that
# says Winner.
# If the user guesses the wrong number print a message that
# says better luck next time.
# Bonus: use a loop that allows the user to keep guessing
# until they want to quit.
# Bonus 2: on exiting the loop tally up and display total
# games won and lost.


import random

won = 0
lost = 0

while True:
    user_input = input(
        "Enter a number between 1 and 9, or 'q' to quit: ")

    if user_input == 'q':
        break

    user_number = int(user_input)

    random_number = random.randint(1, 9)

    if user_number == random_number:
        print("Winner!")
        won += 1
    else:
        print("Better luck next time!")
        lost += 1

    print("Total games won:", won)
    print("Total games lost:", lost)
