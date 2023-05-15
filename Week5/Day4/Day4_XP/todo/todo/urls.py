"""
URL configuration for todo project.

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
from todo_list.views import home_view, todo_view, display_todos, mark_todo_done, category_list, category_todos

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home_view, name='home'),
    path('todo/', todo_view, name='todo'),
    path('todos/', display_todos, name='display_todos'),
    path('todo_done/<int:todo_id>/', mark_todo_done, name='mark_todo_done'),
    path('categories/', category_list, name='category_list'),
    path('category_todo/<int:category_id>/', category_todos, name='category_todo'),
]
