venv) PS E:\Full-Stack-Django-Python-JS-HTML-ML\django\first_project> cd .\first_project\
(venv) PS E:\Full-Stack-Django-Python-JS-HTML-ML\django\first_project\first_project> ls

    Directory: E:\Full-Stack-Django-Python-JS-HTML-ML\django\first_project\first_project

Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          14-11-2022    14:33              0 __init__.py
-a---          14-11-2022    14:33            419 asgi.py
-a---          14-11-2022    14:33           3386 settings.py
-a---          14-11-2022    14:33            776 urls.py
-a---          14-11-2022    14:33            419 wsgi.py

(venv) PS E:\Full-Stack-Django-Python-JS-HTML-ML\django\first_project\first_project> cd ../
(venv) PS E:\Full-Stack-Django-Python-JS-HTML-ML\django\first_project> python manage.py runserver       
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).

You have 18 unapplied migration(s). Your project may not work properly until you apply the migrations for app(s): admin, auth, contenttypes, sessions.
Run 'python manage.py migrate' to apply them.
November 14, 2022 - 14:35:04
Django version 3.2.16, using settings 'first_project.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
[14/Nov/2022 14:35:17] "GET / HTTP/1.1" 200 10697
[14/Nov/2022 14:35:17] "GET /static/admin/css/fonts.css HTTP/1.1" 200 423
[14/Nov/2022 14:35:17] "GET /static/admin/fonts/Roboto-Bold-webfont.woff HTTP/1.1" 200 86184
[14/Nov/2022 14:35:17] "GET /static/admin/fonts/Roboto-Regular-webfont.woff HTTP/1.1" 200 85876
[14/Nov/2022 14:35:17] "GET /static/admin/fonts/Roboto-Light-webfont.woff HTTP/1.1" 200 85692
Not Found: /favicon.ico
[14/Nov/2022 14:35:17] "GET /favicon.ico HTTP/1.1" 404 2117
(venv) PS E:\Full-Stack-Django-Python-JS-HTML-ML\django\first_project> 