from random import choice
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


def get_data(url) -> list[dict]:
    response = requests.get(url)
    data = response.json()
    return data


def get_random_instances(data_list: list, n: int):

    instances = []
    for _ in range(n):
        random_inst = choice(data_list)
        instances.append(random_inst)

    return instances


def extract(instance: dict):

    try:
        name = instance['name']['common']
        capital = instance['capital'][0]
        flag_emoji = instance['flag']
        flag_url = instance['flags']['png']
        subregion = instance['subregion']
        population = instance['population']

        return name, capital, flag_emoji, flag_url, subregion, population

    except KeyError:
        return None


def preprocess(instances: list[dict]):

    preprocessed = []

    for instance in instances:
        preprocessed_inst = extract(instance)
        if preprocessed_inst is None:
            continue
        preprocessed.append(preprocessed_inst)

    return preprocessed
