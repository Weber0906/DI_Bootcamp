from django.shortcuts import render
from .forms import CategoryForm, GifForm #LikeForm
from .models import Category, Gif
from django.http import HttpResponse
import requests

# Add new GIF view

def homepage(request):
    gifs = Gif.objects.all()
    return render(request, 'gifs/homepage.html', {'gifs': gifs})


def add_gif_view(request):

    if request.method == 'POST':
        print("POST data: ", request.POST)
        print('POSTING DATA')
        # put the data from the request into the ModelForm
        gif_filled_form = GifForm(request.POST)

        if gif_filled_form.is_valid():  # check if all fields contain the correct data
            new_gif = gif_filled_form.save()  # save data into database
            category = gif_filled_form.cleaned_data['categories']
            category_obj = Category.objects.get(name=category)

            new_gif.categories.add(category_obj)

            return HttpResponse("SUCCESSFULLY SAVED")

        else:
            print(gif_filled_form.errors)
            return HttpResponse(gif_filled_form.errors)

    # GET mode - getting content out
    if request.method == 'GET':
        gif_form = GifForm()
        print("GET data: ", request.GET)  # data associated with the GET method
        print("GETTING DATA OUT")
        context = {'form': gif_form}
        return render(request, 'gifs/add_gif.html', context)

# Add new Category view


def add_category_view(request):

    if request.method == 'POST':
        print("POST data: ", request.POST)
        print('POSTING DATA')
        # put the data from the request into the ModelForm
        category_filled_form = CategoryForm(request.POST)

        if category_filled_form.is_valid():  # check if all fields contain the correct data
            category_filled_form.save()  # save data into database
            return HttpResponse("SUCCESSFULLY SAVED")

    # GET mode - getting content out
    if request.method == 'GET':
        category_form = CategoryForm()
        print("GET data: ", request.GET)  # data associated with the GET method
        print("GETTING DATA OUT")
        context = {'form': category_form}

    return render(request, 'gifs/add_category.html', context)


def gifs_view(request, gif_id):
    gifs_all = Gif.objects.get(id=gif_id)
    # gifs_all = Gif.objects.all()
    # like_dislike_forms = [
    #     LikeForm(initial={'gif': gif_intsance}) for gif_intsance in gifs_all]

    # gifs_forms = list(zip(gifs_all))   #like_dislike_forms

    # context = {'gifs_forms': gifs_forms}

    return render(request, 'gifs/gifs_all.html')

def category_view(request, category_id):
    category = Category.objects.get(id=category_id)
    gifs = category.gifs.all()
    return render(request, 'gifs/category.html', {'category': category, 'gifs': gifs})


def categories_view(request):
    categories = Category.objects.all()
    return render(request, 'gifs/categories.html', {'categories': categories})

import requests

def populate_gifs(request):
    api_key = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    categories = [
        "Funny",
        "Cute",
        "Sports",
        "Movies",
        "Music",
        "Animals",
        "Gaming",
        "Celebrities",
        "Nature",
        "Memes",
    ]
    
    for category in categories:
        category_query = category.replace(' ', '+')
        endpoint = f'https://api.giphy.com/v1/gifs/search?q={category_query}&rating=g&api_key={api_key}&limit=100'
        
        response = requests.get(endpoint)
        if response.status_code == 200:
            data = response.json()
            gifs = data['data']

            for gif in gifs:
                title = gif['title']
                url = gif['images']['original']['url']
                uploader_name = gif['username']

                gif_obj, _ = Gif.objects.get_or_create(title=title, url=url, uploader_name=uploader_name)

                category_obj, _ = Category.objects.get_or_create(name=category)
                category_obj.gifs.add(gif_obj)

    return HttpResponse('Database populated successfully!')
