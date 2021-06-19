
from . import views
from django.urls import path

urlpatterns = [
    path('cart', views.cart ),
    path('addcart', views.addCart),
    path('removecart', views.removeCart),
    path('ordercart', views.orderCart),
    path('orderdetails', views.oderDetails),
    path('clearcart', views.clearCart),
    path('updatecart', views.updateCart),
    path('registered', views.registerOrder ),
    path('unregistered', views.unRegisterOrder ),
     

]
 