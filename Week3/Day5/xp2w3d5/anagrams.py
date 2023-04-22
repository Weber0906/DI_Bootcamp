from anagram_checker import AnagramChecker


ac = AnagramChecker("sowpods.txt")


input_word = input("Enter a word: ")


if ac.is_valid_word(input_word):

    anagrams = ac.get_anagrams(input_word)

    if len(anagrams) == 0:
        print("No anagrams found.")
    else:
        print("Anagrams found:", ", ".join(anagrams))
else:
    print("Invalid word.")
