from django import forms
from .models import TaskDb

class TaskForm(forms.ModelForm):
    class Meta:
        model = TaskDb
        fields = ['task', 'priority'] # these two, are the fields that we want the user to enter manually.