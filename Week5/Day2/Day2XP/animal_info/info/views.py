from django.shortcuts import render, get_object_or_404
from . models import Animal, Family


# Create your views here.
def family_list(request, pk):
    family = get_object_or_404(Family, pk=pk)
    animals = family.animal_set.all()
    return render(request, 'family_list.html', {'family': family, 'animals': animals})


def animal_detail(request, pk):
    animal = get_object_or_404(Animal, pk=pk)
    return render(request, 'animal_detail.html', {'animal': animal})


def animal_list(request):
    animals = Animal.objects.all()
    return render(request, 'animal_list.html', {'animals': animals})
