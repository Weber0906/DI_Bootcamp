# Exercise 1 : Built-In Functions

# Instructions
# Python has many built-in functions.
# If you feel that you don’t know how to properly
# implement them take a look at the python documentation
# online.
# Write a program which prints the results of the following
# python built-in functions: abs(), int(), input().
# Using the __doc__ dunder method create your own
# documentation which explains the execution of your code.
# Take a look at the doc method on google for help

def buil_in_func(s, b):

    s = float(input("Enter a number(could be negative and float): "))
    b = int(input("Enter number:"))
    v = s.__add__(b)
    print(f"Absolute value of {s} is {s.__abs__()}")
    print(f"your number is {b.__int__()}")
    print(f"Sum of {s} and {b} is {v}")
    return


# print(dir(s))
buil_in_func(3.30, 5)

"""Used built in functions abs, int and input"""


# Using the code above, implement the relevant methods
# and dunder methods which will output the results below.
# Hint : When adding 2 currencies which don’t share
# the same label you should raise an error.


class Currency:

    def __init__(self, currency: str, amount: int):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
            else:
                return Currency(self.currency, self.amount + other.amount)
        elif isinstance(other, int):
            return Currency(self.currency, self.amount + other)
        else:
            raise TypeError(
                f" 'Currency' and '{type(other).__name__}'")

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add  <{self.currency}> and <{other.currency}>")
            else:
                self.amount += other.amount
        elif isinstance(other, int):
            self.amount += other
        else:
            raise TypeError(
                f"Can't do +=: 'Currency' and '{type(other).__name__}'")
        return self

    def __eq__(self, other):
        if isinstance(other, Currency):
            return self.currency == other.currency and self.amount == other.amount
        else:
            return False


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
