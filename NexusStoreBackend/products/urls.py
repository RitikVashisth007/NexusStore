from . import views
from django.urls import path,re_path

urlpatterns = [
    path('', views.products ),
    path('<int:id>', views.singleProduct ),
    path('electronic', views.electronicProduct ),
    path('mobile', views.mobileProduct ),
    path('fashion', views.fashionProduct ),
    path('applicances', views.applicancesProduct ),
    path('featurelisting', views.fetaureListing ),
    path('featureproducts', views.fetaureProducts ),
    path('featureproducts/<int:id>', views.fetaureSingleProducts ),
  
    path('search', views.ProductViewSet.as_view()),

]   


