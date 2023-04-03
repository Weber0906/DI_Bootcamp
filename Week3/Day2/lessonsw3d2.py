class Animal:

    def __init__(self, name: str):
        self.name = name

    def breathing(self):
        out = f'{self.name} breaths'
        print(out)


class Mammal(Animal):
    def produce_milk(self):
        out = f'{self.name} produces milk'
        print(out)


class Seamammal(Mammal):
    def swims(self):
        out = f'{self.name} swims'
        print(out)


mammal = Mammal('dolphin')
seamammal = Seamammal('Whale')
mammal.breathing()
mammal.produce_milk()
seamammal.swims()
