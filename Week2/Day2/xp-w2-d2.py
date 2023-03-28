# Exercise 1
# Create a set called my_fav_numbers with all your favorites numbers.
# Add two new numbers to the set.
# Remove the last number.
# Create a set called friend_fav_numbers with your friend’s favorites numbers.
# Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

# my_fav_numbers = set([1, 2, 3, 4])
# print(my_fav_numbers)
# my_fav_numbers.add(8)
# print(my_fav_numbers)
# my_fav_numbers.add(9)
# print(my_fav_numbers)
# my_fav_numbers.remove(9)
# print(my_fav_numbers)
# friend_fav_numbers = set([10, 11, 12, 13])
# our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# print(our_fav_numbers)

# Exercise 2
# Given a tuple which value is integers, is it possible to add more integers to the tuple?
# tuples are immutable and therefore the sum can not be modified


# Exercise 3
# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# print(basket)
# basket.remove("Blueberries")
# print(basket)
# basket.append("Kiwi")
# print(basket)
# basket.insert(0, "Apples")
# print(basket)
# count = basket.count("Apples")
# print(f"The amount of apples is {count}")
# basket.clear()
# print(basket)

# Exercise 4: Floats
# Instructions
# Recap – What is a float? What is the difference between an integer and a float? -
# Answer: integer is a whole number, float is a number with a decimal point. Floats are used when needed more precision

# Can you think of another way to generate a sequence of floats?

# rng = [x / 10 for x in range(0, 10)]
# print(rng)

# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).

# i = 1.5
# while i <= 5:
#     print(i)
#     i += 0.5

# Exercise 5: For Loop
# Instructions
# Use a for loop to print all numbers from 1 to 20, inclusive.
# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.

# for i in range(1, 21):
#     print(i)


# Exercise 6 : While Loop
# Instructions
# Write a while loop that will continuously ask the user for their name, unless the input is equal to your name.

# username = 'Nikolas'

# while True:
#     username = input('Enter your username: ')

#     if username == 'Nikolas':
#         print('Hello')
#         break
#     else:
#         print(f'You entered wrong {username}')
#         continue
#         print('Enter your username')


# Exercise 7: Favorite Fruits
# Instructions
# Ask the user to input their favorite fruit(s) (one or several fruits).
# Hint : Use the built in input method. Ask the user to separate the fruits with a single space, eg. "apple mango cherry".
# Store the favorite fruit(s) in a list (convert the string of words into a list of words).
# Now that we have a list of fruits, ask the user to input a name of any fruit.
# If the user’s input is in the favorite fruits list, print “You chose one of your favorite fruits! Enjoy!”.
# If the user’s input is NOT in the list, print, “You chose a new fruit. I hope you enjoy”.


# my_list = input(
#     'What\'s your favorite fruite? If there\'s more than one - put single space between them ')

# fruits = my_list.split('#')

# print(fruits)


# Exercise 8: Who Ordered A Pizza ?
# Instructions
# Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
# As they enter each topping, print a message saying you’ll add that topping to their pizza.
# Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

# topping = input("Topping or QUIT")
# toppings = []
# while topping != "QUIT":

#     toppings.append(topping)
#     print(f"Adding {topping} to pizza")
#     topping = input("Topping or QUIT: ")

# base_price = 10
# toppings_price = 2.5 * len(toppings)

# total_price = base_price + toppings_price

# print("TOPPINGS: ", toppings, "Total Price", total_price)

# Exercise 9: Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Ask a family the age of each person who wants a ticket.

# Store the total cost of all the family’s tickets and print it out.

# A group of teenagers are coming to your movie theater and want to watch a movie that is restricted for people between the ages of 16 and 21.
# Given a list of names, write a program that asks teenager for their age, if they are not permitted to watch the movie, remove them from the list.
# At the end, print the final list

# total = 0
# while True:
#     age = input("How old are you? ")

#     if age == "quit":
#         break
#     age = int(age)
#     if age < 3:
#         print("Your ticket is free")
#     elif age < 12:
#         print("Your ticket is $10")
#         total += 10
#     else:
#         print("Your ticket is $15")
#         total += 15
# print(total)


# people = ['Barbie', 'Michael', 'Bradley', 'Julia', 'Ron']
# people_info = []

# for teenager in people:
#     age = input(f"Hi {teenager}, What's your age? ")
#     age_int = int(age)
#     if age_int < 21 and age_int > 16:
#         info = teenager, age_int
#         people_info.append(info)
# print(people_info)


# Exercise 10 : Sandwich Orders
# Instructions
# sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]

# Use the above list called sandwich_orders.
# Make an empty list called finished_sandwiches.
# As each sandwich is made, move it to the list of finished sandwiches.
# After all the sandwiches have been made, print a message listing each sandwich that was made , such as I made your tuna sandwich.

# sandwich_orders = ["Tuna sandwich", "Avocado sandwich",
#                    "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]

# finished_sandwiches = []

# while sandwich_orders:
#     current_sandwich = sandwich_orders.pop()
#     print("I made your " + current_sandwich)
#     finished_sandwiches.append(current_sandwich)

# print(sandwich_orders)
# print(finished_sandwiches)


# Exercise 11 : Sandwich Orders#2
# Instructions
# Using the list sandwich_orders from the previous exercise, make sure the sandwich ‘pastrami’ appears in the list at least three times.
# Add code near the beginning of your program to print a message saying the deli has run out of pastrami, and then use a while loop to remove all occurrences of ‘pastrami’ from sandwich_orders.
# Make sure no pastrami sandwiches end up in finished_sandwiches.

# sandwich_orders = ["Pastrami sandwich", "Tuna sandwich", "Pastrami sandwich", "Avocado sandwich",
#                    "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
# finished_sandwiches = []
# print("The Deli has run out of pastrami")
# while "Pastrami sandwich" in sandwich_orders:
#     sandwich_orders.remove("Pastrami sandwich")
# print("\n")
# while sandwich_orders:
#     current_sandwich = sandwich_orders.pop()
#     print("I'm working on your " + current_sandwich + " sandwich.")
#     finished_sandwiches.append(current_sandwich)

# print("\n")
# for sandwich in finished_sandwiches:
#     print("I made a " + sandwich + " sandwich.")
# print(finished_sandwiches)
# # print(sandwich_orders)
# # print(finished_sandwiches)
