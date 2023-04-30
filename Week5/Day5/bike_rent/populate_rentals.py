import os
import django
from faker import Faker
import random
from datetime import date, timedelta

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_rent.settings')
django.setup()

from rent.models import Customer, Rental, Vehicle

fake = Faker()


def generate_fake_rentals(num_rentals):

    # Generate rentals
    for _ in range(num_rentals):
        # Generate rental date (between today and 10 days ago)
        rental_date = fake.date_between(start_date='-10d', end_date='today')

        # Generate return date (sometimes null, sometimes after rental date)
        return_date = None
        if random.random() > 0.2:  # 80% chance of having a return date
            return_date = fake.date_between(start_date=rental_date, end_date=date.today())

        customer = random.choice(Customer.objects.all())
        # Check if the vehicle is already rented and not returned
        vehicle = None
        while not vehicle:
            random_vehicle = random.choice(Vehicle.objects.all())
            if not Rental.objects.filter(vehicle=random_vehicle, return_date__isnull=True).exists():
                vehicle = random_vehicle

        # Create the rental object
        rental = Rental(rental_date=rental_date, return_date=return_date, customer=customer, vehicle=vehicle)
        rental.save()

if __name__ == '__main__':
    generate_fake_rentals(60)