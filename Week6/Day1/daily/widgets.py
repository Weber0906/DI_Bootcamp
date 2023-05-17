
# class FilmForm(forms.ModelForm):
#     class Meta:
#         model = Film
#         fields = '__all__'  # You can specify the fields you want to include instead of '__all__'

#         widgets = {
#             'title': forms.TextInput(attrs={'class': 'form-control'}),
#             'release_date': forms.DateInput(attrs={'class': 'form-control'}),
#             'created_in_country': forms.Select(attrs={'class': 'form-control'}),
#             'available_in_countries': forms.SelectMultiple(attrs={'class': 'form-control'}),
#             'category': forms.CheckboxSelectMultiple(),
#             'director': forms.SelectMultiple(attrs={'class': 'form-control'}),
#         }