from django.db.models import fields
from rest_framework import serializers
from .models import *



class AddressSerializer(serializers.ModelSerializer):
    class Meta():
        model = Address
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    address = AddressSerializer()

    class Meta():
        model = Profile
        fields = '__all__'