# class Animal:

#     def __init__(self, name: str):
#         self.name = name

#     def breathing(self):
#         out = f'{self.name} breaths'
#         print(out)


# class Mammal(Animal):
#     def produce_milk(self):
#         out = f'{self.name} produces milk'
#         print(out)


# class Seamammal(Mammal):
#     def swims(self):
#         out = f'{self.name} swims'
#         print(out)


# mammal = Mammal('dolphin')
# seamammal = Seamammal('Whale')
# mammal.breathing()
# mammal.produce_milk()
# seamammal.swims()

password = 1234

user_pass = int(input("password: "))

if user_pass != int:
    raise TypeError("Only numbers")
elif user_pass != password:
    raise TypeError("Wrong password")
else:
    print("Password accepted")
