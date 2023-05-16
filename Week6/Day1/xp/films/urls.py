from django.urls import path
from . import views

app_name = 'films'

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('addFilm/', views.add_film, name='add_film'),
    path('addDirector/', views.add_director, name='add_director'),
]
