# Answer the following questions

# What is a class?
# A class is a blueprint or a template for creating objects in
# object-oriented programming. It defines a set of attributes
# (data members) and methods (functions) that the objects of the class will have.

# What is an instance?
# An instance is an individual occurrence or realization of a class.
# It is a unique object that is created from the blueprint of the class.

# What is encapsulation?
# Encapsulation is a principle of object-oriented programming that restricts direct access to an object's data
# and methods from outside the object. It hides the implementation details of the object and only allows access
# to the object's interface or public methods.

# What is abstraction?
# Abstraction is a principle of object-oriented programming that simplifies complex systems by
# representing them at a high level of abstraction.

# What is inheritance?
# Inheritance is a mechanism in object-oriented programming that allows a class to inherit properties and behavior from another class.

# What is multiple inheritance?
# Multiple inheritance is a feature of some object-oriented programming languages that allows a class to inherit from multiple classes.
# This means that a subclass can have properties and behavior from multiple superclasses.
#
# What is polymorphism?
# Polymorphism is a principle of object-oriented programming that allows objects of different classes
# to be treated as if they are of the same class.

# What is method resolution order or MRO?
# Method resolution order (MRO) is the order in which the interpreter searches for methods to execute in a class hierarchy that uses inheritance.
# It determines the order in which methods are called in a class hierarchy that has multiple inheritance.


# Part 2: Create A Deck Of Cards Class.

# The Deck of cards class should NOT inherit from a Card class.

# The requirements are as follows:

# The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
# The Deck class :
# should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.


import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value


class Deck:
    def __init__(self):
        self.cards = []
        self.build()

    def build(self):
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        values = ['A', '2', '3', '4', '5', '6',
                  '7', '8', '9', '10', 'J', 'Q', 'K']
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            return None
        return self.cards.pop()


deck = Deck()


deck.shuffle()


for i in range(5):
    card = deck.deal()
    if card:
        print(f'Dealt {card.value} of {card.suit}')
    else:
        print('No more cards in the deck')
        break
