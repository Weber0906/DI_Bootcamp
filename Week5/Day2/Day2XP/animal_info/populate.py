import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'animal_info.settings')
django.setup()

from info.models import Family

def populate_families():
    families = ['mammal', 'reptile', 'insect', 'arachnid', 'amphibian']

    for family_name in families:
        Family.objects.create(name=family_name)

if __name__ == '__main__':
    populate_families()