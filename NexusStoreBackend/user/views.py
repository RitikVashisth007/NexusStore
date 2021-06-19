from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *
from django.contrib.auth.models import User
from rest_framework import status
from userProfile.models import *
# Create your views here.


@api_view()
def home(request):
    return Response('hello')



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializers = UserSerializerWithToken(self.user).data
        
        for k,v in serializers.items():
            data[k] = v
        
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['POST'])
def registerUser(request):
    data = request.data 
    
    try:
        user = User.objects.create_user(
        username = data['email'].lower(),
        email = data['email'].lower(),
        password= (data['password']),
        first_name= data['name'],
    
        
        ) 
        
        user.save()

        serializer = UserSerializerWithToken(user , many=False)
        profile = Profile.objects.create(user=user , name=data['name'])

        return Response(serializer.data)
    
    except:
        message = {'deatil':'User with this email already register'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)




@api_view(['GET'])
@permission_classes([IsAdminUser])
def allUsers(request):
    users = User.objects.all()
    serializers = AllUserSerializer(users, many=True)
    return Response(serializers.data)
    