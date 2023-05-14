from django.shortcuts import render
from django.views import View
from django.http import HttpResponse
from .models import Person

class PhoneNumberView(View):
    def get(self, request, phone_number):
        try:
            person = Person.objects.get(phone_number=phone_number)
            context = {'person': person}
            return render(request, 'person_info.html', context)
        except Person.DoesNotExist:
            return HttpResponse("No person found with the given phone number.")

class NameView(View):
    def get(self, request, name):
        try:
            person = Person.objects.get(name=name)
            context = {'person': person}
            return render(request, 'person_info.html', context)
        except Person.DoesNotExist:
            return HttpResponse("No person found with the given name.")
