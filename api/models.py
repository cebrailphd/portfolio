from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=8, default='', unique=True)
    age = models.CharField(max_length=2, unique=True)