games_won = 0
games_lost = 0

while True:
    # Ask the user to input a number from 1 to 9
    user_input = input(
        "Guess a number between 1 and 9 (inclusive), or enter 'q' to quit: ")

    # If the user enters 'q', exit the loop
    if user_input == 'q':
        break

    # Convert the user's input to an integer
    user_number = int(user_input)

    # Generate a random number between 1 and 9
    random_number = random.randint(1, 9)

    # Check if the user's guess is correct
    if user_number == random_number:
        print("Winner!")
        games_won += 1
    else:
        print("Better luck next time!")
        games_lost += 1

# Print the total number of games won and lost
    print("Total games won:", games_won)
    print("Total games lost:", games_lost)