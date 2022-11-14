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