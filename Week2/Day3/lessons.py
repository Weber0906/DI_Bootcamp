# Create dictionaru

a_set = {1, 2, 3}

a_dict = {100: "And then something happend"}

b_dict = {'first_name': 'Yossi', 'last name': 'eik', 'age': 31,
          'residence': 'Tel-Aviv', 'languages': ['python', 'js', 'java']}

print(b_dict['first_name'])
print(b_dict['languages'][0])

a_tuple = {'First_name': 'yossi', 'last name': 'eik'}

# update

b_dict['country'] = 'Israel'
# adds new key and value

sample_dict = {
    "class": {
        "student": {
            "name": "Mike",
            "marks": {
                "physics": 70,
                "history": 80
            }
        }
    }
}

sample_dict['class']['student']['marks']['history']
80

# sample_dict.keys()
# sample_dict.values() it's when we need to get to specific values or keys

# Delete

b_dict.pop('country')
b_dict.clear()
del b_dict[]


for key in b_dict:
    print
