from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

# Create your views here.

def index(request):
    return HttpResponse("Hello world. You're at the polls index.")

def about(request):
    return HttpResponse("This is the about page of the polls app.")

def test(request):
    return render(request, 'polls/test.html')

# def test(request):
#     template=loader.get_template("polls/test.html")
#     return HttpResponse(template.render(request=request))

def dashboard(request):
    template = loader.get_template("polls/dashboard.html")
    context = {
        'name': 'Clayton',
        'age': 34,
        'skills': ['Python', 'Django', 'JavaScript'],
        'is_active': True
    }   
    return HttpResponse(template.render(context=context, request=request))
