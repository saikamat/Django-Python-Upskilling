from django.shortcuts import render

def home(request):
    return render(request, 'homepage.html')

def aboutUs(request):
    return render(request, 'about-us.html')