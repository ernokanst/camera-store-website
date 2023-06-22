from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("about", views.index, name="about"),
    path("catalog/all", views.index, name="catalog"),
    path("catalog/<int:ct>", views.index, name="catalog"),
]
