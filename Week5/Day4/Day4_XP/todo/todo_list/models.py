from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    image = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name

class Todo(models.Model):
    title = models.CharField(max_length=200)
    details = models.TextField()
    has_been_done = models.BooleanField(default=False)
    date_creation = models.DateField(auto_now_add=True)
    date_completion = models.DateField(null=True, blank=True)
    deadline_date = models.DateField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)  # Add on_delete argument here

    def __str__(self):
        return self.title

