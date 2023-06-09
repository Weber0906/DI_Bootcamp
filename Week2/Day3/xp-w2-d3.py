# Exercise1
# Convert the two following lists, into dictionaries.
# Hint: Use the zip method
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# new_dict = dict(zip(keys, values))
# print(new_dict)

# Exercise 2 : Cinemax
# Instructions
# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using
# the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

# total = 0

# family = {}

# while True:
#     name = input("Enter your name:")
#     age = input("Enter your age:")

#     if age == "q" or name == "q":
#         break

#     age = int(age)
#     if age <= 3:
#         price = 0
#         print("Your ticket is free")
#     elif age < 12:
#         price = 10
#         print("Your ticket is $10")
#         total += price
#     else:
#         price = 15
#         print("Your ticket is $15")
#         total += price

#     family[name] = {'age': age, 'ticket': price}
# print(total)
# print(family)

# Exercise 3: Zara

# Instructions

# Here is some information about a brand.
# name: Zara
# creation_date: 1975
# creator_name: Amancio Ortega Gaona
# type_of_clothes: men, women, children, home
# international_competitors: Gap, H&M, Benetton
# number_stores: 7000
# major_color:
#     France: blue,
#     Spain: red,
#     US: pink, green
# 2. Create a dictionary called brand which value is the information from part one (turn the info into keys and values).
# 3. Change the number of stores to 2.
# 4. Print a sentence that explains who Zaras clients are.
# 5. Add a key called country_creation with a value of Spain.
# 6. Check if the key international_competitors is in the dictionary. If it is, add the store Desigual.
# 7. Delete the information about the date of creation.
# 8. Print the last international competitor.
# 9. Print the major clothes colors in the US.
# 10. Print the amount of key value pairs (ie. length of the dictionary).
# 11. Print the keys of the dictionary.
# 12. Create another dictionary called more_on_zara with the following details:

# creation_date: 1975
# number_stores: 10 000

# brand = {"name": "Zara",
#          "creation_date": "1975",
#          "creator_name": "Amancio Ortega Gaona",
#          "type_of_clothes": ["men", "women", "children", "home"],
#          "international_competitors": ["Gap", "H&M", "Benetton"],
#          "number_stores": "7000",
#          "major_color": {"France": "blue",
#                          "Spain": "red",
#                          "US": ["pink", "green"]}
#          }

# brand.update({"number_stores": "2"})
# brand.update({"country_creation": "Spain"})

# if "international_competitors" in brand:
#     print("Present")
#     brand["international_competitors"] += ["Desigual"]
# else:
#     print("Not Present")

# del brand["creation_date"]


# print(brand["international_competitors"][3])

# brand_list = [brand]
# print(brand_list[0]["major_color"]["US"])

# print("Zara's clients are generally young people")

# print("Length : %d" % len(brand))

# print(brand.keys())

# print(brand)

# more_on_zara = {"creation_date": "1975", "number_stores": "10 ˜000"}


# Exercise 4 : Disney Characters
# Instructions
# Use this list :
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# Analyse these results :
# #1/
# >>> print(disney_users_A)
# {"Mickey": 0, "Minnie": 1, "Donald": 2, "Ariel": 3, "Pluto": 4}
# #2/
# >>> print(disney_users_B)
# {0: "Mickey",1: "Minnie", 2: "Donald", 3: "Ariel", 4: "Pluto"}
# #3/
# >>> print(disney_users_C)
# {"Ariel": 0, "Donald": 1, "Mickey": 2, "Minnie": 3, "Pluto": 4}
# Use a for loop to recreate the 1st result. Tip : don’t hardcode the numbers.
# Use a for loop to recreate the 2nd result. Tip : don’t hardcode the numbers.
# Use a method to recreate the 3rd result. Hint: The 3rd result is sorted alphabetically.
# Only recreate the 1st result for:
# The characters, which names contain the letter “i”.
# The characters, which names start with the letter “m” or “p”.

users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
# print(users)
users_value = list()
for i in range(5):
    users_value.append(i)
# print(users_value)
result = dict(zip(users, users_value))
print(result)

result2 = dict(zip(users_value, users))
print(result2)

users_sorted = sorted(users)
result3 = dict(zip(users_sorted, users_value))
print(result3)

matches = [match for match in users if "i" in match]
print(matches[0])

check = 'm'
result = [idx for idx in users if idx.upper().startswith(check.upper())]
print(result[0])

check = 'p'
result1 = [idx for idx in users if idx.upper().startswith(check.upper())]
print(result1[0])
