from rest_framework import serializers
from django.contrib.auth.models import User

from rest_framework_simplejwt.tokens import RefreshToken

class AllUserSerializer(serializers.ModelSerializer):
    class Meta():
        model = User
        fields = ['username','email','is_staff','first_name']










class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id','is_staff','username','email','first_name','token']

    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)