# Instructions :

# The goal is to create a class that represents a simple circle.
# A Circle can be defined by either specifying the radius or the diameter.
# The user can query the circle for either its radius or diameter.

# Other abilities of a Circle instance:

# Compute the circle’s area
# Print the circle and get something nice
# Be able to add two circles together
# Be able to compare two circles to see which is bigger
# Be able to compare two circles and see if there are equal
# Be able to put them in a list and sort them
from translate import Translator
import math


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Must specify either radius or diameter")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return math.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius {self.radius:.2f}"

    def __repr__(self):
        return f"Circle({self.radius})"

    def __add__(self, other):
        return Circle(self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __gt__(self, other):
        return self.radius > other.radius


c1 = Circle(radius=3)
print(c1.radius)
print(c1.diameter)
print(c1.area)
print(str(c1))
print(repr(c1))

c2 = Circle(diameter=4)
print(c2.radius)
print(c2.diameter)
print(c2.area)
print(str(c2))
print(repr(c2))

c3 = c1 + c2
print(c3.radius)
print(c3.diameter)
print(c3.area)
print(str(c3))
print(repr(c3))

print(c2 < c1)
print(c2 == Circle(radius=2))

circles = [c3, c2, c1]
print(sorted(circles))


# Consider this list

# french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
# Look at this result :
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
# You have to recreate the result using a translator module.


french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]


translator = Translator(from_lang="fr", to_lang="en")


translated_words = {word: translator.translate(word) for word in french_words}


print(translated_words)
