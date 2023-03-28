numbers_1 = [num for num in range(11)]
numbers_2 = [num for num in range(11, 21)]

print(numbers_1)
print(numbers_2)

connected = dict(zip(numbers_1, numbers_2))

print(connected)
