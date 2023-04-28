import sys
import os
import django
from faker import Faker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_rent.settings')
django.setup()

from rent.models import Customer

fake = Faker()


def create_fake_customers(num_customers):
    for _ in range(num_customers):
        first_name = fake.first_name()
        last_name = fake.last_name()
        email = fake.email()
        phone_number = fake.phone_number()
        address = fake.street_address()
        city = fake.city()
        country = fake.country()

        customer = Customer(
            first_name=first_name,
            last_name=last_name,
            email=email,
            phone_number=phone_number,
            address=address,
            city=city,
            country=country
        )
        customer.save()


if __name__ == '__main__':
    create_fake_customers(10)

