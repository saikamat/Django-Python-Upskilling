from django.shortcuts import render

def submit(request):
    return render(request, 'input.html')

def getResults(request):
    user_input = request.GET['user_input']
    return render(request, 'output_result.html', {'age_input': user_input})