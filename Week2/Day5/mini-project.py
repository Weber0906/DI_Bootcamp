from random import randrange

#
# the function accepts one parameter containing the board's current status
# and prints it out to the console
#


def DisplayBoard(board):
    # print(board)
    for i in range(0, len(board), 3):
        print("+-------"*3 + "+")
        print("|       "*3 + "|")
        print("|   " + str(board[i]) +
              "   |   " + str(board[i + 1]) +
              "   |   " + str(board[i + 2]) + "   |   ")
        print("|       "*3 + "|")
    print("+-------"*3 + "+")
