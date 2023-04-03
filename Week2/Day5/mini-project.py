# board
def draw_board():
    a = ('\n* * * * * * * * * * * * * * *  *')
    b = ('\n*  ________ ________ ________  *')
    c = (
        '\n* |   {}   |   {}   |   {}   | *'.format(values[0], values[1], values[2]))
    d = (
        '\n* |   {}   |   {}   |   {}   | *'.format(values[3], values[4], values[5]))
    e = (
        '\n* |   {}   |   {}   |   {}   | *'.format(values[6], values[7], values[8]))
    f = ('\n* |        |        |        | *')
    print(a, b, f, c, f, b, f, d, f, b, f, e, f, b, a)


draw_board(values)
