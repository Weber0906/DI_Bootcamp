from collections import Counter

filename = 'star_wars.txt'

# Read the file line by line
with open(filename, 'r') as file:
    while True:
        line = file.readline()
        print(line)
        if line == '':
            break


# Read only the 5th line of the file
with open(filename, 'r') as file:
    lines = file.readlines(5)
    print(lines)


# Read only the 5th first characters of the file
with open(filename, 'r') as file:
    chars = file.readline(5)
    print(chars)

# Read all the file and return it as a list of strings. Then split each word
lines = []
with open(filename, 'r') as file:
    text = file.read()
    text_list = text.split('\n')
    lines = text_list
print(lines)

# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# way1
counter = Counter(lines)
print(counter)

# way2
print(lines.count('Lea'))
print(lines.count('Darth'))
print(lines.count('Luke'))

# with open(filename, 'r') as file:


# Append your first name at the end of the file

# to_append = '\nNikolas\n'
# with open(filename, 'a') as file:
#     file.write(to_append)

# print(counter)
# Append "SkyWalker" next to each first name "Luke"
lines_updated = []
for line in lines:
    if line == 'Luke':

        new_line = f'{line} Skywalker'

    else:
        new_line = line

        lines_updated.append('new_line\n')

print(lines_updated)

with open(filename, 'w') as file:
    file.writelines(lines_updated)
