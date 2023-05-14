from django.contrib import admin
from django.urls import path
from phone_app.views import PhoneNumberView, NameView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('persons/phonenumber/<str:phone_number>/', PhoneNumberView.as_view(), name='phone_number_view'),
    path('persons/name/<str:name>/', NameView.as_view(), name='name_view'),
]
