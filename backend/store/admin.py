from django.contrib import admin

from .models import Category, StoreItem, Order

admin.site.register(StoreItem)
admin.site.register(Category)
admin.site.register(Order)