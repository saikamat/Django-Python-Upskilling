from django.shortcuts import render, redirect
from .models import TaskDb
from .forms import TaskForm
from django.contrib import messages

# Create your views here.
def home(request):

    # accept a user request
    if request.method == 'POST':
        form = TaskForm(request.POST or None)

        # check if the user request is valid or not. If valid, then add that value to the database
        if form.is_valid():
            form.save()
            all_items = TaskDb.objects.all()
            # message to indicate that the task has been added successfully
            messages.success(request, ('New Item Added'))
            return render(request, 'index.html', {'all_items':all_items})
    # if not, output all the objects anyway
    else:
        all_items = TaskDb.objects.all()
        return render(request, 'index.html', {'all_items':all_items})