from django.shortcuts import render
from . import fake_model

def home(request):
    return render(request, 'index.html')

def results(request):
    user_input_age = int(request.GET["age"])
    age_predictor = fake_model.fake_predict(user_input_age)
    return render(request, 'results.html', {'age_prediction': age_predictor})