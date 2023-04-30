from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView, CreateView
from .models import Rental, Customer, Vehicle, VehicleType
from django.shortcuts import redirect
from django.utils import timezone
from django import forms


class MainPageView(TemplateView):
    template_name = 'rent/base.html'

class RentalListView(ListView):
    model = Rental
    queryset = Rental.objects.order_by('return_date', 'rental_date')
    context_object_name = 'rent/rental_list'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['rental_list'] = self.queryset  # Pass the queryset to the context
        return context

class RentalDetailView(DetailView):
    model = Rental

class RentalCreateView(CreateView):
    model = Rental
    fields = ['customer', 'vehicle', 'rental_date']
    template_name = 'rent/rental_create.html'
    # Implement form validation and error handling logic

class CustomerDetailView(DetailView):
    model = Customer
    context_object_name = 'customer'

class CustomerListView(ListView):
    model = Customer
    queryset = Customer.objects.order_by('last_name', 'first_name')
    context_object_name = 'customer_list'

class CustomerCreateView(CreateView):
    model = Customer
    fields = ['first_name', 'last_name', 'email', 'phone_number', 'address', 'city', 'country']
    template_name = 'rent/customer_create.html'
    # Implement form validation and error handling logic

class VehicleListView(ListView):
    model = Vehicle
    template_name = 'rent/vehicle_list.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        vehicle_categories = VehicleType.objects.all()
        for category in vehicle_categories:
            category.vehicle_list = self.get_queryset().filter(vehicle_type__name=category.name)
        context['vehicle_category_list'] = vehicle_categories
        return context

    # def get_queryset(self):
    #     return super().get_queryset().prefetch_related('rental_set')

class VehicleDetailView(DetailView):
    model = Vehicle
    fields = ['vehicle_type', 'date_created', 'real_cost', 'size']

class VehicleCreateView(CreateView):
    model = Vehicle
    fields = ['vehicle_type', 'date_created', 'real_cost', 'size']
    template_name = 'rent/vehicle_create.html'
    # Implement form validation and error handling logic

def return_rental(request, pk):
    rental = Rental.objects.get(pk=pk)
    rental.returned_on = timezone.now()
    rental.save()
    return redirect('rent:rental_detail', pk=pk)

# from django.shortcuts import render, redirect
# from .models import Rental, Customer, Vehicle

# def main_page_view(request):
    # return render(request, 'rent/base.html')

# def rental_list(request):
#     rentals = Rental.objects.order_by('return_date', 'rental_date')
#     return render(request, 'rent/rental_list.html', {'rentals': rentals})

# def rental_detail(request, pk):
#     rental = Rental.objects.get(pk=pk)
#     return render(request, 'rent/rental_detail.html', {'rental': rental})

# def rental_add(request):
#     if request.method == 'POST':
#        
#     else:
#        
#         return render(request, 'rent/rental_create.html')

# def customer_list(request):
#     customers = Customer.objects.order_by('last_name', 'first_name')
#     return render(request, 'rent/customer_list.html', {'customers': customers})

# def customer_detail(request, pk):
#     customer = Customer.objects.get(pk=pk)
#     return render(request, 'rent/customer_detail.html', {'customer': customer})

# def customer_add(request):
#     if request.method == 'POST':
#        
#     else:
#         
#         return render(request, 'rent/customer_create.html')

# def vehicle_list(request):
#     vehicles = Vehicle.objects.all()
#     return render(request, 'rent/vehicle_list.html', {'vehicles': vehicles})

# def vehicle_detail(request, pk):
#     vehicle = Vehicle.objects.get(pk=pk)
#     return render(request, 'rent/vehicle_detail.html', {'vehicle': vehicle})

# def vehicle_add(request):
#     if request.method == 'POST':
#         
#     else:
#        
#         return render(request, 'rent/vehicle_add.html')

# def return_rental(request, pk):
#     rental = Rental.objects.get(pk=pk)
#     rental.returned_on = timezone.now()
#     rental.save()
#     return redirect('rental_detail', pk=pk)