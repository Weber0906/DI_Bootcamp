from spellchecker import SpellChecker


class AnagramChecker:
    def __init__(self, words_file):
        with open(words_file, "r") as f:
            self.words_list = [word.strip().upper() for word in f]

    def is_valid_word(self, word):
        spell = SpellChecker()
        return spell.correction(word.upper()) == word.upper()

    def is_anagram(self, word1, word2):

        word1 = word1.upper().replace(" ", "")
        word2 = word2.upper().replace(" ", "")

        if len(word1) != len(word2):
            return False

        return sorted(word1) == sorted(word2)

    def get_anagrams(self, word):

        anagrams = []

        for i in self.words_list:
            if self.is_anagram(word, i):
                anagrams.append(i)

        return anagrams
