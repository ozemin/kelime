#django urls.py

# Path: words/main/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]