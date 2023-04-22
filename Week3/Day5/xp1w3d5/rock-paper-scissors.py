from game import Game


def get_user_menu_choice():
    while True:
        print("Main menu:")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")
        choice = input("Enter your choice (1-3): ")
        if choice in ["1", "2", "3"]:
            return choice
        else:
            print("Invalid choice, please try again.\n")


def print_results(results):
    print("Game summary:")
    print(f"Win: {results['win']}")
    print(f"Loss: {results['loss']}")
    print(f"Draw: {results['draw']}")
    print("Thanks for playing!")


def main():
    results = {'win': 0, 'loss': 0, 'draw': 0}
    choice = get_user_menu_choice()
    while choice != '3':
        if choice == '1':
            game = Game()
            result = game.play()
            if result == 'win':
                results['win'] += 1
            elif result == 'loss':
                results['loss'] += 1
            else:
                results['draw'] += 1
            choice = get_user_menu_choice()  # Ask user for input again
        elif choice == '2':
            print_results(results)
            choice = get_user_menu_choice()  # Ask user for input again
    print_results(results)


if __name__ == '__main__':

    main()
