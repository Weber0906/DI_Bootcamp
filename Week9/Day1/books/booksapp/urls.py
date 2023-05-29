from django.urls import path
from .views import BookList, BookDetail, book_create

urlpatterns = [
     path('books/create-post/', book_create, name='book-create'),
     path('books/', BookList.as_view(), name='book-list'),
     path('books/<int:pk>/', BookDetail.as_view(), name='book-detail')
]