# Ask a user for a word
# Write a program that creates a dictionary. This dictionary stores the indexes of each letter in a list.

# Make sure the letters are the keys.
# Make sure the letters are strings.
# Make sure the indexes are stored in a list and those lists are values.
# Examples

# "dodo" ➞ { "d": [0, 2], "o": [1, 3] }

# "froggy" ➞ { "f":  [0], "r": [1], "o": [2], "g": [3, 4], "y": [5] }

# "grapes" ➞ { "g": [0], "r": [1], "a": [2], "p": [3]}


s = "dodo"
b = "froggy"
c = "grapes"

frequenceies1 = {}
frequenceies2 = {}
frequenceies3 = {}

for i, letter in enumerate(s):

    if letter in frequenceies1:
        frequenceies1[letter].append(i)
    else:
        frequenceies1[letter] = []
        frequenceies1[letter].append(i)

for i, letter in enumerate(b):

    if letter in frequenceies2:
        frequenceies2[letter].append(i)
    else:
        frequenceies2[letter] = []
        frequenceies2[letter].append(i)

for i, letter in enumerate(c):

    if letter in frequenceies3:
        frequenceies3[letter].append(i)
    else:
        frequenceies3[letter] = []
        frequenceies3[letter].append(i)

print(frequenceies1, frequenceies2, frequenceies3)

# Challenge 2

# Create a program that prints a list of the items you can afford in the store with the money you have in your wallet.
# Sort the list in alphabetical order.
# Return “Nothing” if you can’t afford anything from the store.
# Examples

# The key is the product, the value is the price

# items_purchase = {
#     "Water": "$1",
#     "Bread": "$3",
#     "TV": "$1,000",
#     "Fertilizer": "$20"
# }

# wallet = "$300"

# ➞ ["Bread", "Fertilizer", "Water"]

# items_purchase2 = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }

# wallet = "$100"

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

# items_purchase = {
#   "Phone": "$999",
#   "Speakers": "$300",
#   "Laptop": "$5,000",
#   "PC": "$1200"
# }

# wallet = "$1"

# ➞ "Nothing"


def calculate_purchases(items_prices: dict[str, str], wallet: str) -> list | str:

    wallet_updated = wallet.strip("$")
    wallet_updated = wallet_updated.replace(",", "")
    wallet = int(wallet_updated)

    can_purchase = []

    for item, price in items_prices.items():
        price_updated = price.strip("$")
        price_updated = price_updated.replace(",", "")
        items_prices[item] = int(price_updated)

        if items_prices[item] <= wallet:
            can_purchase.append(item)
            wallet -= items_prices[item]

    return sorted(can_purchase) if can_purchase else "Nothing"


# 1
items_purchase1 = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

# 2
items_purchase2 = {
    "Apple": "$4",
    "Honey": "$3",
    "Fan": "$14",
    "Bananas": "$4",
    "Pan": "$100",
    "Spoon": "$2"
}

# 3
items_purchase3 = {
    "Phone": "$999",
    "Speakers": "$300",
    "Laptop": "$5,000",
    "PC": "$1200"
}

wallet1 = "$300"
wallet2 = "$100"
wallet3 = "$1"

print(calculate_purchases(items_purchase1, wallet1))
print(calculate_purchases(items_purchase2, wallet2))
print(calculate_purchases(items_purchase3, wallet3))
