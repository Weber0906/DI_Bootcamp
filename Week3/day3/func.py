def add_2_number(self, other):
    num1 = self
    num2 = other
    print(num1.__add__(num2))
    return self


add_2_number(3, 5)
