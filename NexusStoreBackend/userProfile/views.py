from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser

# Create your views here.



@api_view(['GET','PUT'])
@permission_classes([IsAuthenticated])
def profile(request):
    user = request.user
    data = request.data
    print(data) 
    if request.method == 'GET':
        try:
            profile = Profile.objects.get(user=user)
            serializers = ProfileSerializer(profile)
            return Response(serializers.data)
        except:
            return Response('Something went wrong in Creating or getting profile')

    if request.method == 'PUT':
        
            address = Address.objects.create( 
                user=user,
                name = data['name'],
                phone = data['phone'],
                street = data['street'],
                city = data['city'],
                state = data['state'],
                pincode = data['pincode'],

            )
            print(address)
            
            # profile = Profile.objects.select_for_update(user=user,address=address)
            profile = Profile.objects.get(user=user)
            print(profile)
            profile.address=address
            
            profile.save()
            
            serializers = ProfileSerializer(profile )
            return Response(serializers.data)
        





@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def address(request):
    user = request.user
    if request.method == 'POST':
        data = request.data
        
        address = Address.objects.create(
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
        profile.address=address
            
        profile.save()
        
        serializers = AddressSerializer(address)
        return Response(serializers.data)
    elif request.method == 'GET' : 
        address = Address.objects.filter(user=user)
        serializers = AddressSerializer(address, many=True)
        return Response(serializers.data)

