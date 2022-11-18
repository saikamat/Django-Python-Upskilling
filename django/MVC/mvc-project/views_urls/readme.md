### Create a separate .py file 
This is the basic python file which illustrates how to make changes in existing workflow.

### Create a function called home in it
```
from django.http import HttpResponse

def home(request):
    return HttpResponse('This is my first working page!\nHurray!')
```

### Add the path to the file `urls.py`
```
from . import views
```

### Add the function to the path() in the same python file
```
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home)    # the new line
]
```
----
----

### Integrating HTML into Django

1. Create a directory say `templates` in a sibling folder to `views_urls`. Add an `index.html` file to it containing some sample html code.

2. In the `views_urls/settings.py`, find the section called `TEMPLATES`. 

3. There add a string `templates` in the list called `DIRS`. Essentially, it should look like this:-
```
TEMPLATES = [
    {
        ...
        'DIRS': ['templates'],
        ...
        ...
```

4. In the `view_urls/views.py`, make the following changes:-
```
from django.shortcuts import render

def home(request):
    return render(request, 'index.html')
```

This change is important and will be used often going forward.