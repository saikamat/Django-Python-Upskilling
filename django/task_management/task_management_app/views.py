from django.shortcuts import render
from .models import TaskDb

# Create your views here.
def home(request):
    all_items = TaskDb.objects.all()
    return render(request, 'index.html', {'all_items':all_items})