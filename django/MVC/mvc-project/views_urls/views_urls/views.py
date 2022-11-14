from django.http import HttpResponse

def home(request):
    return HttpResponse('This is my first working page!\nHurray!')