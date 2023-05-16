from django.contrib import admin
from .models import Person
from phonenumber_field.formfields import PhoneNumberField
from phonenumber_field.widgets import PhoneNumberInternationalFallbackWidget


class PersonAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'address')
    list_display_links = ('name',)
    search_fields = ('name', 'email', 'phone_number')
    exclude = ('id',)
    formfield_overrides = {
        PhoneNumberField: {'widget': PhoneNumberInternationalFallbackWidget},
    }


admin.site.register(Person, PersonAdmin)

# Register your models here.
