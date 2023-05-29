from django.shortcuts import render, redirect
from rest_framework import generics
from .models import Book 
from .serializers import BookSerializer
from django.views.decorators.csrf import csrf_exempt



class BookList(generics.ListCreateAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

def book_create(request):
    if request.method == 'POST':
        serializer = BookSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return redirect('book-list')
    else:
            serializer = BookSerializer()
    return render(request, 'booksapp/book_create.html', {'serializer': serializer})
# Create your views here.


