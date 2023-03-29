
# # def calculation(a, b) -> tuple[int, int]:
# #     addition = a + b
# #     subtraction = a - b
# #     return addition, subtraction


# # res = calculation(40, 10)
# # print(res)

# def generate_info() -> tuple[int, str]:
#     return 'Yossi', 'A'


# def concat_str(str1, str2) -> str:
#     concatenated = str1 + ' ' + str2
#     return concatenated


# def summarize_info() -> str:
#     str1, str2 = generate_info()
#     concatenated = concat_str(str1, str2)
#     return concatenated


# print(summarize_info())


# def add_two(num1, num2):
#     return num1 + num2

# add_two = lambda num1, num2: num1 +num2


# numbers = [1, 2, 3, 4, 5, 6, 7, 8]


# def multiply_2(num): return num * 2


# result_list = list(map(multiply_2, numbers))

# print(result_list)

words = ['dog', 'cat', 'ball']

result_list = list(map(lambda word: word.capitalize(), words))

print(result_list)
