from django.urls import path
from . import views

app_name = 'rent'

urlpatterns = [
    path('', views.MainPageView.as_view(), name='main_page'),
    path('rental/', views.RentalListView.as_view(), name='rental_list'),
    path('rental/<int:pk>/', views.RentalDetailView.as_view(), name='rental_detail'),
    path('rental/add/', views.RentalCreateView.as_view(), name='rental_create'),
    path('customer/<int:pk>/', views.CustomerDetailView.as_view(), name='customer_detail'),
    path('customer/', views.CustomerListView.as_view(), name='customer_list'),
    path('customer/add/', views.CustomerCreateView.as_view(), name='customer_create'),
    path('vehicle/', views.VehicleListView.as_view(), name='vehicle_list'),
    path('vehicle/<int:pk>/', views.VehicleDetailView.as_view(), name='vehicle_detail'),
    path('vehicle/add/', views.VehicleCreateView.as_view(), name='vehicle_create'),
    path('rental/return/<int:pk>/', views.return_rental, name='return_rental'),
]