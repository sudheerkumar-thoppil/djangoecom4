from django.db import models

# Create your models here.
class Product(models.Model):
    item = models.CharField(max_length=50)
    price = models.FloatField(default=0)
    image = models.ImageField(upload_to='media')

    def __str__(self):
        return self.item