from django.db import models
from django.contrib.auth.models import User


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


class Order(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    items = models.ManyToManyField(StoreItem)
    payment_ch = [(1, "Оплачено"), (0, "Оплата при получении")]
    delivery_ch = [(0, "В магазине"), (1, "Доставка"), (2, "ПВЗ")]
    payment = models.IntegerField(choices=payment_ch, default=0)
    delivery = models.IntegerField(choices=delivery_ch, default=0)
    address = models.CharField(max_length=100, default=None, blank=True, null=True)

    def __str__(self):
        return str(self.id)