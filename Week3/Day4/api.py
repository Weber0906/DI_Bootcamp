# import requests

# response = requests.get("http://api.open-notify.org/iss-now.json")
# data = response.json()
# print(data)
# database.append()


# print(response)

# birth_year = int(input('what year were you born?: '))
# age = 2023 - birth_year
# print(f'Your age is {age}')

username = input('Username')
password = input('Password')

password_length = len(password)
password_hidden = '*' * password_length
print(f"{username} your password, {password_hidden} is {password_length} letters long")
