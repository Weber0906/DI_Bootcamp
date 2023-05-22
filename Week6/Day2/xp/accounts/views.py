from django.shortcuts import render, redirect, reverse, get_object_or_404
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.models import User
from .forms import SignupForm, LoginForm

def signup_view(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('accounts:login')
    else:
        form = SignupForm()
    return render(request, 'accounts/signup.html', {'form': form})

def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect(reverse('accounts:profile', args=[user.id]))
    else:
        form = LoginForm()
    return render(request, 'accounts/login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect('films:homepage')

def profile_view(request, user_id):
    user = get_object_or_404(User, id=user_id)
    return render(request, 'accounts/profile.html', {'user': user})


