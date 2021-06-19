from rest_framework import views
from . import views
from django.urls import path

urlpatterns = [
    path('', views.home , name='home'),
    path('register', views.registerUser ),
    path('allusers', views.allUsers ),
    path('token', views.MyTokenObtainPairView.as_view() ),
]
