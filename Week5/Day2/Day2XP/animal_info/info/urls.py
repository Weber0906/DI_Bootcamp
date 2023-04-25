from django.urls import path
from . import views

urlpatterns = [
    path('family/<int:pk>/', views.animals_by_family, name='animals_by_family'),
    path('animal/<int:pk>/', views.animal_details, name='animal_details'),
    path('animals/', views.animal_list, name='animal_list'),
]
