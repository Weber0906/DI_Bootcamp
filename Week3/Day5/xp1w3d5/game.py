import random


class Game:

    def get_user_item(self):
        while True:
            user_item = input("Select an item (rock/paper/scissors): ")
            if user_item in ["rock", "paper", "scissors"]:
                return user_item
            print("Invalid input, please try again.")

    def get_computer_item(self):
        return random.choice(["rock", "paper", "scissors"])

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif (user_item == "rock" and computer_item == "scissors") or \
             (user_item == "paper" and computer_item == "rock") or \
             (user_item == "scissors" and computer_item == "paper"):
            return "win"
        else:
            return "loss"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print("You selected {}. The computer selected {}.".format(
            user_item, computer_item))
        if result == "draw":
            print("You drew!")
        elif result == "win":
            print("You win!")
        else:
            print("You lose!")
        return result
