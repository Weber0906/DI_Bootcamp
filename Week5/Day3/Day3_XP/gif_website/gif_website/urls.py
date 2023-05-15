"""
URL configuration for gif_website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from gifs.views import add_gif_view, add_category_view, gifs_view, homepage, category_view, categories_view, populate_gifs

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', homepage, name='homepage'),
    path('add_gif/', add_gif_view, name='add_gif'),
    path('add_category/', add_category_view, name='add_category'),
    path('category/<int:category_id>/', category_view, name='category_view'),
    path('categories/', categories_view, name='categories_view'),
    path('gif/<int:gif_id>/', gifs_view, name='gifs_view'),
    path('populate_gifs/', populate_gifs, name='populate_gifs'),

]
