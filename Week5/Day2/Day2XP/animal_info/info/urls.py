from django.urls import path
from . import views

urlpatterns = [
    path('family/<int:pk>/', views.family_list, name='animals_by_family'),
    path('animal/<int:pk>/', views.animal_detail, name='animal_details'),
    path('animals/', views.animal_list, name='animal_list'),
]
