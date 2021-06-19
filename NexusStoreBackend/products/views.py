from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import *
from .serializers import *


from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from rest_framework import generics



@api_view(['GET'])
def products(request):
    products = Product.objects.all()
    serializers = ProductSerializer(products, many=True)

    return Response(serializers.data)
  


@api_view(['GET'])
def singleProduct(request,id):
    product = Product.objects.get(id=id)
    serializers = ProductSerializer(product)
    return Response(serializers.data)


@api_view(['GET'])
def electronicProduct(request):
    product = Product.objects.filter(category='Electronic') 
    print(product)
    serializers = ProductSerializer(product , many=True)
    return Response(serializers.data) 


@api_view(['GET'])
def mobileProduct(request):
    product = Product.objects.filter(category='Mobile') 

    serializers = ProductSerializer(product , many=True)
    return Response(serializers.data) 


@api_view(['GET'])
def fashionProduct(request):
    product = Product.objects.filter(category='Fashion') 

    serializers = ProductSerializer(product , many=True)
    return Response(serializers.data) 


@api_view(['GET'])
def applicancesProduct(request):
    product = Product.objects.filter(category='Applicances') 

    serializers = ProductSerializer(product , many=True)
    return Response(serializers.data) 






# ------------- Feature Listing


@api_view(['GET'])
def fetaureListing(request):
    listing = FeatureListing.objects.all()
    serializers = FeatureListingSerializer(listing, many=True)

    return Response(serializers.data)


@api_view(['GET'])
def fetaureProducts(request):
    product = FeatureProduct.objects.all()
    serializers = FeatureProductSerializer(product, many=True)

    return Response(serializers.data)

@api_view(['GET'])
def fetaureSingleProducts(request,id):
    product = FeatureProduct.objects.get(id=id)
    serializers = FeatureProductSerializer(product)

    return Response(serializers.data)



# Serach Product


class ProductViewSet(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['id', 'title']
    search_fields = ['title', 'keywords' , 'brand' , 'category', 'subcategory']
    ordering_fields = ['title', 'id' , 'price']
    ordering = ['id']