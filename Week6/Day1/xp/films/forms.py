from django import forms
from .models import Film, Director


class AddFilmForm(forms.ModelForm):
    release_date = forms.DateField(
        widget=forms.DateInput(attrs={'class': 'datepicker'}), 
        input_formats=['%Y-%m-%d'], 
        help_text='Enter the release date in the format YYYY-MM-DD.'
    )

    class Meta:
        model = Film
        fields = ['title', 'release_date', 'created_in_country', 'available_in_countries', 'category', 'director']
        widgets = {
            'director': forms.CheckboxSelectMultiple(),
            'available_in_countries': forms.CheckboxSelectMultiple(),
        }


class AddDirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ['first_name', 'last_name']