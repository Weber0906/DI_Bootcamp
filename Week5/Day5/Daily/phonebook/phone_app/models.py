from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Person(models.Model):

    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = PhoneNumberField()
    address = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.name} | {self.phone_number} | {self.address} | {self.email}'
# Create your models here.
