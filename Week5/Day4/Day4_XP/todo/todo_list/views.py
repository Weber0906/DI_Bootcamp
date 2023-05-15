from django.shortcuts import render, redirect, get_object_or_404
from .models import Todo, Category
from .forms import TodoForm
from django.utils import timezone
from datetime import date, timedelta

def home_view(request):
    return render(request, 'todo_list/home.html')


def todo_view(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('display_todos')
    else:
        form = TodoForm()
    return render(request, 'todo_list/todo_form.html', {'form': form})

def display_todos(request):
    todos = Todo.objects.all()
    return render(request, 'todo_list/todo_list.html', {'todos': todos})

def mark_todo_done(request, todo_id):
    todo = get_object_or_404(Todo, pk=todo_id)
    todo.has_been_done = True
    todo.date_completion = timezone.now()
    todo.save()
    return redirect('display_todos')


def category_list(request):
    categories = Category.objects.all()
    return render(request, 'todo_list/category_list.html', {'categories': categories})

def category_todos(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    todos = category.todo_set.all()

    return render(request, 'todo_list/category_todo.html', {'category': category, 'todos': todos})

def has_deadline_passed(todo):
    if todo.deadline_date < date.today():
        return True
    return False

def is_deadline_close(todo):
    deadline_delta = todo.deadline_date - date.today()
    if deadline_delta.days < 2:
        return True
    return False

def is_deadline_far(todo):
    deadline_delta = todo.deadline_date - date.today()
    if deadline_delta.days > 7:
        return True
    return False

def is_completed_before_deadline(todo):
    if todo.date_completion and todo.date_completion < todo.deadline_date:
        return True
    return False