from . import views
from django.urls import path

urlpatterns = [
    path('user', views.profile),
    path('address', views.address ),
    
]
