# rows = int(input('Enter the number of rows'))

# num = rows
# # reverse for loop
# for j in range(rows, 0, i):
#     for i in range(rows, 0, -1):
#         print(num, end=' ')
#     print()

def multiply_add(num: int, limit: int) -> int:
    base = '1'
    res = 0

    for i in range(1, limit + 1):
        multiplicator = base * i
        multiplicator = int(multiplicator)
        res += num * multiplicator

    return res


print(multiply_add(3, 4))
