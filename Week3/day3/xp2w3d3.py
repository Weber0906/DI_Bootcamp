# Exercise 1: Import
# Instructions
# In a file named func.py create a function that adds 2 number, and prints the result
# In a file namedexercise_one.py import and the function
# Hint: You can use the the following syntaxes:

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

    holiday_date = datetime.datetime(2023, 4, 6)
    holiday_name = "Independance Day"

    time_diff = holiday_date - datetime.datetime.now()
    days = time_diff.days
    hours, remainder = divmod(time_diff.seconds, 3600)
    minutes, seconds = divmod(remainder, 60)

    if days == 0:
        time_left = f"{hours:02}:{minutes:02}:{seconds:02} hours"
    else:
        time_left = f"{days} days and {hours:02}:{minutes:02}:{seconds:02} hours"

    print(
        f"Today is {datetime.date.today()}, and the next upcoming holiday is {holiday_name} in {time_left}.")


next_holiday()
