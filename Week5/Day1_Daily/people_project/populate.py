import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'people_project.settings')
django.setup()

from people.models import Person


people = [
            {
                'name': 'Bob Smith',
                'age': 35,
                'country': 'USA'
            },
            {
                'name': 'Martha Smith',
                'age': 60,
                'country': 'USA'
            },
            {
                'name': 'Fabio Alberto',
                'age': 18,
                'country': 'Italy'
            },
            {
                'name': 'Dietrich Stein',
                'age': 85,
                'country': 'Germany'
            }
        ]

def add_people(people):
        for p in people:
            person = Person(name=p['name'], age=p['age'], country=p['country'])
            person.save()

if __name__ == '__main__':
    add_people(people)