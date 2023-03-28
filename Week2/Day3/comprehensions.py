# numbers = []

# for num in range(100):
#     if num % 2 == 0:
#         numbers.append(num)

# print(numbers)
# # what to add (2,4,6, etc) for number in range 100
# numbers = [num for num in range(100) if num % 2 == 0]

# print(numbers)

# alpha = 'abcdef'
# heb_dict = dict(enumerate(alpha))

# print(heb_dict)

# even_letters = [value for key, value in heb_dict.items() if key % 2 == 1]

# print(even_letters)


# word = "HEllo"

# word_list = [char for char in word]

# print(word_list)

word = "HEllo"

word_dict = {index: value for index, value in enumerate(word)}

print(word_dict)
