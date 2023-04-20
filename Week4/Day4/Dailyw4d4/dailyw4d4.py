import random
import requests
import psycopg2

# Retrieve data from API
response = requests.get('https://restcountries.com/v3.1/all')
countries = response.json()

# Choose 10 random countries
random_countries = random.sample(countries, 10)

# Connect to database
conn = psycopg2.connect(
    host="localhost",
    database="dailychallengew4d4",
    user="nikolai",
    password="12345678"
)
cursor = conn.cursor()

# Create table
cursor.execute('''CREATE TABLE IF NOT EXISTS countries
                  (name text, capital text, flag text, subregion text, population integer)''')

# Insert data into table
for country in random_countries:
    name = country['name']['common']
    capital = country['capital'][0]
    flag_dict = country.get('flags', {})
    flag_url = flag_dict.get('png', '')
    subregion = country['subregion']
    population = country['population']
    cursor.execute("INSERT INTO countries VALUES (%s, %s, %s, %s, %s)",
                   (name, capital, flag_url, subregion, population))

# Commit changes and close connection
conn.commit()
conn.close()
