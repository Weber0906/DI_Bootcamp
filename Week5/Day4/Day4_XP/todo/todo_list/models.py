from django.db import models
import datetime

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField()

    def __str__(self) -> str:
        return f'{self.name}'


class To_do(models.Model):

    title = models.CharField(max_length=50)
    details = models.CharField(max_length=100)
    has_been_done = models.BooleanField(default=False)
    date_creation = models.DateField()
    date_completion = models.DateTimeField()
    deadline_date = models.DateTimeField()
    category = models.ForeignKey(Category)

    def __str__(self):
        return f'{self.title}, {self.uploader_name}'
