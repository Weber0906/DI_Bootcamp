# Using the input function, ask the user for a string. The string must be 10 characters long.
# If it’s less than 10 characters, print a message which states “string not long enough”.
# If it’s more than 10 characters, print a message which states “string too long”.

from random import shuffle


string = input("At least 10 characters:")
if len(string) < 10:
    print("String not long enough")
else:
    print("String too long")


# Then, print the first and last characters of the given text.

print(string[0:len(string):len(string)-1])

# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed.
c=1
for i in string:
    print(string[0:c])
    c+=1
# Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method).
s = list(string)
s_list = list(s)
shuffle(s_list)
s = "".join(s_list)
print(s)