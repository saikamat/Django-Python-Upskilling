## Multipage website with HTML, CSS, JS integrated with Django

### Creating your first project
1. Create a directory and cd into it
```
mkdir django_project
cd django_project
```

2. Now use the `django-admin` to create the config files
```
django-admin startproject django_project
```
be sure to use `_` underscores as separators

3. You should see an additional folder created in the `django_project` directory.
```
└───django_project
    └───django_project
        │   db.sqlite3
        │   manage.py
        │   readme.md
        └───views_urls
            │   asgi.py
            │   settings.py
            │   urls.py
            │   wsgi.py
            │   __init__.py
            │
            └───__pycache__
```
4. Head to the `django_project` sub-directory that contains the `readme.md` file. To run the Django server, run:-
```
python runserver manage.py
```

### Integrating with CSS, JS
1. Create a new folder called `static` with `mkdir static`
2. Create a couple of files - `main.css` and `main.js`
3. In the `settings.py`, add the following lines in the `static` section.
```
from os.path import join
STATIC_URL = '/static/' # this line exists before editing and should stay as is
STATICFILES_DIRS = (join('static'),)
```
4. In the `html` file that needs to be linked, in the head section, enter the command `{% load static %}`. So essentially the html head should read out like this:-
```
...
<title>Home Page</title>
{% load static %}
<link rel="stylesheet" href="{% static 'main.css' %}">
...
```
make sure to add the linking in the `href` with the command
```
"{% static 'main.css'%}"
```
So the syntax is like
```
"{% <folder_name> '<file_name.format>' %}"
```
### Integrating the JS file
In the `<body>` section of the `html` file, add the JS with the `<script src=>` command as usual. However the `src` argument should have similar file invoking structure as the CSS. So essentially, the command in the `<script src=>` should look like:-
```
<script type="text/javascript" src="{% static 'main.js' %}"></script>
```
