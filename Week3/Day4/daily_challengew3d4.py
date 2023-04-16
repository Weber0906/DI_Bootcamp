# Instructions :

# The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.


# Part I

# First, we will analyze a simple string, like “A good book would sometimes cost as much as a good house.”

# Create a class called Text that takes a string as an argument and store the text in a attribute.
# Hint: You need to manually copy-paste the text, straight into the code

# Implement the following methods:
# a method to return the frequency of a word in the text (assume words are separated by whitespace) return None or a meaningful message.
# a method that returns the most common word in the text.
# a method that returns a list of all the unique words in the text.

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        print(words.count(word))

    def most_common_word(self):
        words = self.text.split()
        print(max(set(words), key=words.count))

    def unique_words(self):
        words = self.text.split()
        print(list(set(words)))


text1 = Text("A good book would sometimes cost as much as a good house.")

text1.word_frequency('good')
text1.most_common_word()
text1.unique_words()

# Part II

# Then, we will analyze a text coming from an external text file. Download the_stranger.txt file.

# Implement a classmethod that returns a Text instance but with a text file:

#     >>> Text.from_file('the_stranger.txt')
# Hint: You need to open and read the text from the text file.


# Now, use the provided the_stranger.txt file and try using the class you created above.

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        print(words.count(word))

    def most_common_word(self):
        words = self.text.split()
        print(max(set(words), key=words.count))

    def unique_words(self):
        words = self.text.split()
        print(list(set(words)))

    @classmethod
    def from_file(cls, filename):
        with open(filename, 'r') as file:
            text = file.read()
            # filename = 'the_stranger.txt'
        return cls(text)


text2 = Text.from_file('the_stranger.txt')

# text2.most_common_word()
text2.unique_words()

# Bonus:

# Create a class called TextModification that inherits from Text.

# Implement the following methods:
# a method that returns the text without any punctuation.
# a method that returns the text without any english stop-words (check out what this is !!).
# a method that returns the text without any special characters.
# Note: Feel free to implement/create any attribute, method or function needed to make this work, be creative :)
