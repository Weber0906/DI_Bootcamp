
board = ['#'] * 10


def display_board(board):
    blankBoard = """
*********************
*|     |     |     |*
*|  1  |  2  |  3  |*
*|     |     |     |*
* ----------------- *
*|     |     |     |*
*|  4  |  5  |  6  |*
*|     |     |     |*
* ----------------- *
*|     |     |     |*
*|  7  |  8  |  9  |*
*|     |     |     |*
*********************
"""

    for i in range(1, 10):
        if (board[i] == 'O' or board[i] == 'X'):
            blankBoard = blankBoard.replace(str(i), board[i])
        else:
            blankBoard = blankBoard.replace(str(i), ' ')
    print(blankBoard)


def player_input():
    player1 = input("Please choose 'X' or 'O' ")

    while True:
        if player1.upper() == 'X':
            player2 = 'O'
            print("you choose: " + player1 + " player2 will be: " + player2)
            return player1.upper(), player2
        elif player1.upper() == 'O':
            player2 = 'X'
            print("you choose" + player1 + " player2 will be" + player2)
            return player1.upper(), player2
        else:
            player1 = input("Please choose 'X' or 'O' ")


def place_marker(board, marker, position):
    board[position] = marker
    return board


def space_check(board, position):
    return board[position] == '#'


def full_board_check(board):
    return len([x for x in board if x == '#']) == 1


def win_check(board, mark):
    if board[1] == board[2] == board[3] == mark:
        return True
    if board[4] == board[5] == board[6] == mark:
        return True
    if board[7] == board[8] == board[9] == mark:
        return True
    if board[1] == board[4] == board[7] == mark:
        return True
    if board[2] == board[5] == board[8] == mark:
        return True
    if board[3] == board[6] == board[9] == mark:
        return True
    if board[1] == board[5] == board[9] == mark:
        return True
    if board[3] == board[5] == board[7] == mark:
        return True
    return False


def player_choice(board):
    choice = input("Select cell 1 to 9 :")
    while not space_check(board, int(choice)):
        choice = input("This cell is already occupied. Enter again: ")
    return choice


def replay():
    playAgain = input("Wanna play again? Enter y/n: ")
    if playAgain.lower() == 'y':
        return True
    if playAgain.lower() == 'n':
        return False


if __name__ == "__main__":
    print("Tic Tac Toe Game!")
    print("""
*********************
*|     |     |     |*
*|  1  |  2  |  3  |*
*|     |     |     |*
* ----------------- *
*|     |     |     |*
*|  4  |  5  |  6  |*
*|     |     |     |*
* ----------------- *
*|     |     |     |*
*|  7  |  8  |  9  |*
*|     |     |     |*
*********************
""")
    i = 1
    players = player_input()
    board = ['#'] * 10
    while True:
        game_on = full_board_check(board)
        while not game_on:
            position = player_choice(board)
            if i % 2 == 0:
                marker = players[1]
            else:
                marker = players[0]

            place_marker(board, marker, int(position))
            display_board(board)
            i += 1
            if win_check(board, marker):
                print("You won!!!!!")
                break
            game_on = full_board_check(board)
        if not replay():
            break
        else:
            i = 1
            players = player_input()
            board = ['#'] * 10
