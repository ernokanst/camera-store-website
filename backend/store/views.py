from django.shortcuts import render


def index(request, ct=0):
    return render(request, "index.html")
