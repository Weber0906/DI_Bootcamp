from django.shortcuts import render
from .models import Person

# Create your views here.


def search(model, value):

    result = None
    try:
        model_instance = model.objects.get(name=value)
        result = model_instance

    except model.DoesNotExist:
        pass
    try:
        model_instance = model.objects.get(phone_number=value)
        result = model_instance
    except model.DoesNotExist:
        pass

    return result


def search_person(request, search_value: str):

    context = {}

    person_info = search(Person, search_value)

    if person_info is not None:
        context = {'person': person_info}

    return render(request, 'person_info.html', context)
