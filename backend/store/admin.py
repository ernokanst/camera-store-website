from django.contrib import admin

from .models import Category, StoreItem

admin.site.register(StoreItem)
admin.site.register(Category)