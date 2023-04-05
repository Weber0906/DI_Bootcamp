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
from math import pi


class Circle:

    def __init__(self, radius: float) -> None:
        self.radius = radius
        self.diameter = radius * 2

    @classmethod
    def from_diameter(cls, diameter: float):
        new_circle = cls(diameter / 2)
        return new_circle

    @property
    def area(self):
        area = pi * self.radius ** 2
        return area

    def __add__(self, other_circle):
        radius_combined = self.radius + other_circle.radius
        new_circle = Circle(radius_combined)
        return new_circle

    def __lt__(self, other_circle)
    return self.radius < other_circle.radius


c1 = Circle(2.0)

c2 = Circle.from_diameter(6.0)


print("Radius:", c1.radius)
print("Diameter circle1", c1.diameter)

print("Radius:", c2.radius)
print("Diameter circle1", c2.diameter)

print("Area", c1.area)
print("Area", c2.area)

c3 = c1 + c2

print(new)
