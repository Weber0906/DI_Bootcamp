from django.shortcuts import render, redirect
from django.views import View
from django.http import HttpResponse
from .models import Person
from .forms import SearchForm
import phonenumbers

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



import phonenumbers
from phonenumber_field.phonenumber import PhoneNumber


class SearchView(View):
    def get(self, request):
        form = SearchForm()
        context = {'form': form}
        return render(request, 'search.html', context)

    def post(self, request):
        form = SearchForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data.get('name')
            phone_number = form.cleaned_data.get('phone_number')

            if name:
                # Search by name
                try:
                    person = Person.objects.get(name__iexact=name)
                    return redirect('name_view', name=name)
                except Person.DoesNotExist:
                    pass

            if phone_number:
                # Search by phone number
                try:
                    parsed_number = phonenumbers.parse(phone_number, 'IL')
                    if phonenumbers.is_valid_number(parsed_number):
                        normalized_number = phonenumbers.format_number(parsed_number, phonenumbers.PhoneNumberFormat.E164)
                        person = Person.objects.get(phone_number=normalized_number)
                        return redirect('phone_number_view', phone_number=normalized_number)
                except (phonenumbers.phonenumberutil.NumberParseException, Person.DoesNotExist):
                    pass

        context = {'form': form}
        return render(request, 'search.html', context)
