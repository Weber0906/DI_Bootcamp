from django.urls import path
from . import views

urlpatterns = [
    path('', views.person_list, name='people'),
    path('<int:id>/', views.person_detail, name='person'),
]
