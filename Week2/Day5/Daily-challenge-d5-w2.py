# Instructions
# Write a program that accepts a comma separated sequence of words as input
# and prints the words in a comma-separated sequence after sorting them alphabetically.
# Use List Comprehension
# Example:
# Suppose the following input is supplied to the program: without,hello,bag,world
# Then, the output should be: bag,hello,without,world

words = input("Enter comma separated words: ")

sorted_words = [word for word in words.split(",")]
print(",".join(sorted(list(set(sorted_words)))))
