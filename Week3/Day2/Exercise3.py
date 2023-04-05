from XP import Dog
import random


class Dog:
    pass


class PetDog(Dog):
    def __init__(self, name, trained=False):
        super().__init__(name)
        self.trained = trained

    def train(self):
        bark_train = self.bark()
        self.trained = True
        print(bark_train)

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            trick_options = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead",
            ]
            print(random.choice(trick_options))


dog1 = Dog('Bob')
dog2 = Dog('Java')
dog3 = Dog('Python')

dog1.train()
