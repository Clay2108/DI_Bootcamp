from django.db import models

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    genre= models.CharField(max_length=50)
    shelf_location = models.CharField(max_length=50)

    def __str__(self):
        return self.title
