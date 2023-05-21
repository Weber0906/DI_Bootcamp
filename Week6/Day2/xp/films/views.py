from django.shortcuts import render, redirect
from .forms import AddFilmForm, AddDirectorForm
from .models import Film


def homepage(request):
    films = Film.objects.all()
    context = {
        'films': films,
    }
    return render(request, 'homepage.html', context)



def add_film(request):
    if request.method == 'POST':
        form = AddFilmForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('films:homepage')
    else:
        form = AddFilmForm()
    return render(request, 'film/addFilm.html', {'form': form})


def add_director(request):
    if request.method == 'POST':
        form = AddDirectorForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('films:homepage')
    else:
        form = AddDirectorForm()
    return render(request, 'director/addDirector.html', {'form': form})