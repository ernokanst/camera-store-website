from django.db import models


class Category(models.Model):
    category_name = models.CharField(max_length=100)

    def __str__(self):
        return self.category_name


class StoreItem(models.Model):
    name = models.CharField(max_length=100, null=False)
    category = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    description = models.TextField()
    price = models.IntegerField(default=0)
    image = models.ImageField()
    quantity = models.IntegerField(default=0)

    def __str__(self):
        return self.name
