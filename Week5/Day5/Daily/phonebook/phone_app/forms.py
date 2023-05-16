import phonenumbers
from django import forms
from phonenumber_field.formfields import PhoneNumberField


class SearchForm(forms.Form):
    name = forms.CharField(required=False)
    phone_number = PhoneNumberField(required=False, widget=forms.TextInput(attrs={'placeholder': 'Enter phone number'}))

    def clean(self):
        cleaned_data = super().clean()
        name = cleaned_data.get('name')
        phone_number = cleaned_data.get('phone_number')

        if not name and not phone_number:
            raise forms.ValidationError('Please enter a name or a phone number.')

        if phone_number:
            try:
                parsed_number = phonenumbers.parse(phone_number, None)
                if not phonenumbers.is_valid_number(parsed_number):
                    raise forms.ValidationError('Please enter a valid phone number.')
                cleaned_data['phone_number'] = phone_number
            except phonenumbers.phonenumberutil.NumberParseException:
                raise forms.ValidationError('Please enter a valid phone number.')

        return cleaned_data