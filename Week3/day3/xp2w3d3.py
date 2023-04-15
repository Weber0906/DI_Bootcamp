# Exercise 1: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

from faker import Faker
import func
import random
import string
import datetime


# Exercise 2: Random Module

# Instructions

# Create a function that accepts a number between 1 and 100,
# then rolls a random number between 1 and 100,
# if it’s the same number, display a success message to
# the user, else don’t.

def roll_a_number(num):
    if num < 1 or num > 100:
        print("Enter number 1-100")
    else:
        random_number = random.randint(1, 100)
        if num == random_number:
            print(f"Success - your number and {random_number} matched")
        else:
            print(random_number)


roll_a_number(88)


# Exercise 3: String Module

# Instructions

# Generate random String of length 5
# Note: String must be the combination of the UPPER case and lower case letters only. No numbers and a special symbol.
# Hint: use the string module

def random_word(length=5):

    letters = string.ascii_letters
    return ''.join(random.choice(letters) for i in range(length))


print(random_word())


# Create a function that displays the amount of time left from now until January 1st.
# (Example: the 1st of January is in 10 days and 10:34:01hours).

def time_until_jan_1st():

    today = datetime.datetime.now()
    january_1st = datetime.datetime(today.year + 1, 1, 1)
    time_left = january_1st - today
    days_left = time_left.days
    hours_left = time_left.seconds // 3600
    minutes_left = (time_left.seconds // 60) % 60
    seconds_left = time_left.seconds % 60
    print(
        f"The 1st of January is in {days_left} days and {hours_left:02d}:{minutes_left:02d}:{seconds_left:02d} hours.")


time_until_jan_1st()


# Exercise 6 : Birthday And Minutes

# Instructions

# Create a function that accepts a birthdate as an argument
# (in the format of your choice), then displays a message stating how many minutes
# the user lived in his life.


def minutes_lived(birthdate):

    now = datetime.datetime.now()
    age = now - birthdate
    minutes = age.total_seconds() // 60
    print(f"You have lived for {minutes:,} minutes in your life!")


birthdate = datetime.datetime(1980, 6, 9)
minutes_lived(birthdate)


# Write a function that displays today’s date.
# The function should also display the amount of time left from now until
# the next upcoming holiday and print which holiday that is.
# (Example: the next holiday is in 30 days and 12:03:45 hours).
# Hint: Start by hardcoding the datetime and name of the upcoming holiday.

def next_holiday():

    upcoming_holiday = datetime.datetime(2023, 4, 26)
    holiday_name = "Independence Day"

    time_until = upcoming_holiday - datetime.datetime.now()

    print(
        f"The next holiday is {holiday_name} in {time_until.days} days and {time_until.seconds//3600}:{(time_until.seconds//60)%60}:{time_until.seconds%60} hours.")


next_holiday()

# exercise 8
# Given an age in seconds, calculate how old someone would be on:
# Earth: orbital period 365.25 Earth days, or 31557600 seconds
# Mercury: orbital period 0.2408467 Earth years
# Venus: orbital period 0.61519726 Earth years
# Mars: orbital period 1.8808158 Earth years
# Jupiter: orbital period 11.862615 Earth years
# Saturn: orbital period 29.447498 Earth years
# Uranus: orbital period 84.016846 Earth years
# Neptune: orbital period 164.79132 Earth years
# So if you are told someone is 1,000,000,000 seconds old,
# the function should output that they are 31.69 Earth-years old.


def calculate_age(age_in_seconds):

    earth_year = 31557600
    mercury_year = earth_year * 0.2408467
    venus_year = earth_year * 0.61519726
    mars_year = earth_year * 1.8808158
    jupiter_year = earth_year * 11.862615
    saturn_year = earth_year * 29.447498
    uranus_year = earth_year * 84.016846
    neptune_year = earth_year * 164.79132

    age_in_earth_years = age_in_seconds / earth_year

    age_in_mercury_years = age_in_seconds / mercury_year
    age_in_venus_years = age_in_seconds / venus_year
    age_in_mars_years = age_in_seconds / mars_year
    age_in_jupiter_years = age_in_seconds / jupiter_year
    age_in_saturn_years = age_in_seconds / saturn_year
    age_in_uranus_years = age_in_seconds / uranus_year
    age_in_neptune_years = age_in_seconds / neptune_year

    print(f"Age in Earth years: {age_in_earth_years:.2f}")
    print(f"Age in Mercury years: {age_in_mercury_years:.2f}")
    print(f"Age in Venus years: {age_in_venus_years:.2f}")
    print(f"Age in Mars years: {age_in_mars_years:.2f}")
    print(f"Age in Jupiter years: {age_in_jupiter_years:.2f}")
    print(f"Age in Saturn years: {age_in_saturn_years:.2f}")
    print(f"Age in Uranus years: {age_in_uranus_years:.2f}")
    print(f"Age in Neptune years: {age_in_neptune_years:.2f}")


calculate_age(1000000000)

# Exercise 9 : Faker Module

# Instructions

# Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
# Create an empty list called users. Tip: It should be a list of dictionaries.
# Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code.
# Use faker to populate them with fake data.


fake = Faker()

users = []


def add_user():
    user = {
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    }
    users.append(user)


add_user()
print(users)
