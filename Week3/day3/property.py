class Person:
    def __init__(self, name) -> None:
        self.__name = name

    @property
    def name(self):
        return self.__name

    # @property.setter
    # def name(self, new_value: str):
    #     self.__name = new_value


person = Person('David')

print(person.__dict__)
print(help(person.name))


# person.name = 'Ben'
# print(person.name)

# Static method
# class Usefu():

#     @staticmethod
#     def capitalize_word(word: str):
#         return word.capitalize9()
