import re
from products.views import products
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *
from products.models import *



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def cart(request):
    user = request.user
    cart = Cart.objects.filter(user=user) 
    serializers = CartSerializer(cart , many=True)
    return Response(serializers.data) 


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addCart(request):
    user = request.user
    data = request.data 

    product = Product.objects.get(id=data['productid'])  
    
    cart = Cart.objects.create(user=user , product=product ) 
    

    serializers = CartSerializer(cart)
    return Response(serializers.data) 

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def removeCart(request):
    user = request.user
    data = request.data 

    product = Product.objects.get(id=data['productid'])  

    cart = Cart.objects.get(user=user , product=product ) 
    cart.delete()
    cartitem = Cart.objects.filter(user=user) 
    serializers = CartSerializer(cartitem , many=True)
    
    return Response(serializers.data) 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def clearCart(request):
    user = request.user
    cart = Cart.objects.filter(user=user) 
    cart.delete()
    serializers = CartSerializer(cart , many=True)
    return Response(serializers.data) 


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def updateCart(request):
    user = request.user
    data = request.data 

    product = Product.objects.get(id=data['productid'])  
    
    cart = Cart.objects.get(user=user , product=product ) 
    
    cart.qty = data['qty']
    # print('before save')
    cart.save()
    
    cartitem = Cart.objects.filter(user=user) 
    serializers = CartSerializer(cartitem , many=True)
    
    
    
    return Response(serializers.data) 



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def orderCart(request):
    user = request.user
    data = request.data
    carts = Cart.objects.filter(user=user)
    
    shippingAddress,created = Address.objects.get_or_create(
        user=user,
        name = data['name'],
        phone = data['phone'],
        street = data['street'],
        city = data['city'], 
        state = data['state'],
        pincode = data['pincode'], 
    
    )
   
    for cart in carts:
        order = RegisterOrder.objects.create(
            user=user,
            product= cart.product,
            shippingAddress=shippingAddress,
            qty=cart.qty
        )

    
    # for product in products:
        
    #     order = RegisterOrder.objects.create(
    #         user=user,
    #         product= product,
    #         shippingAddress=shippingAddress,
    # )
        
    return Response('doneee')






@api_view(['POST'])
def unRegisterOrder(request):
    data = request.data
    product = Product.objects.get(id=data['productid'] )
    order = UnRegisterOrder.objects.create(
        product= product,
        name = data['name'],
        phone = data['phone'],
        street = data['street'],
        city = data['city'],
        state = data['state'],
        pincode = data['pincode'],
    )
    

    serializers =  UnRegisterOrderSerializer(order )
    return Response(serializers.data ) 



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def registerOrder(request):
    user = request.user
    data = request.data
    product = Product.objects.get(id=data['productid'] )
    
    
    shippingAddress,created = Address.objects.get_or_create(
        user=user,
        name = data['name'],
        phone = data['phone'],
        street = data['street'],
        city = data['city'], 
        state = data['state'],
        pincode = data['pincode'], 
    
    )
    profile = Profile.objects.get(user=user)
    print(profile)
    profile.address=shippingAddress
    profile.save()
    
     
    order = RegisterOrder.objects.create(
        user=user,
        product= product,
        shippingAddress=shippingAddress,
    )
    
    

    serializers =  RegisterOrderSerializer(order)
    return Response(serializers.data ) 




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def oderDetails(request):
    user = request.user
    order = RegisterOrder.objects.filter(user=user)
    
    
    

    serializers =  RegisterOrderSerializer(order , many=True)
    return Response(serializers.data ) 


