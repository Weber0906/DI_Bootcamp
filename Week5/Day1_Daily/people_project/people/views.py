from django.shortcuts import render
from .models import Person


def person_list(request):
    people = Person.objects.all().order_by('age')
    return render(request, 'people/person_list.html', {'people': people})


def person_detail(request, id):
    person = Person.objects.get(id=id)
    return render(request, 'people/person_detail.html', {'person': person})
