matrix_str = '''7i3
Tsi
h%x
i #
sM 
$a 
#t%
^r!'''

matrix_list = list(matrix_str)

column1 = matrix_list[0::4]

column2 = matrix_list[1::4]

column3 = matrix_list[2::4]


print(column1)
print(column2)
print(column3)

# To decrypt the matrix, Neo reads each column from top to bottom, starting from the leftmost column, selecting
# only the alpha characters and connecting them.


def process_column(column: list[str]) -> str:

    message = ""
    non_alpha = 0

    for char in column:
        if char.isalpha():
            message += char
            non_alpha = 0
        else:
            non_alpha += 1
            if non_alpha == 2:
                message += ' '
                # non_alpha = 0

    return message


message1 = process_column(column1)
message2 = process_column(column2)
message3 = process_column(column3)

print(message1 + message2 + message3)
# print(message2)
# print(message3)
