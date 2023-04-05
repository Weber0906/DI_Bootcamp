# text = '''Thhis is the first line in the text\n
# This is she 2nd line
# 3rd
# 4th
# '''
# text_list = text.split('\n')
# print(text_list)

# filename = 'sample.txt'

# # w - write
# with open(filename, 'w') as file:
#     #     file.write(text)
#     #     file.writelines(text_list)
#     for line in text_list:
#         file.write(line + '\n')

filename = 'sample.txt'

text = ''

with open(filename, 'r') as file:
    text = file.read()

print(text)
