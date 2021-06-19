from django.contrib import admin
from django.urls import path,include

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('user.urls')),
    path('profile/', include('userProfile.urls')),
    path('products/', include('products.urls')),
    path('order/', include('order.urls')),
    path('payment/', include('stripePayment.urls')),
]



urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)  
