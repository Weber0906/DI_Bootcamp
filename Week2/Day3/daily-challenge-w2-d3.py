
a = int(input("Enter the number "))
n = int(input("Enter the length "))
d = a

for i in range(1, n+1):
    multiples = a + (i-1)*d
    print(multiples)
