from userProfile.serializers import AddressSerializer
from userProfile.views import address
from products.serializers import ProductSerializer
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import *

class CartSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta():
        model = Cart
        fields = '__all__'


class RegisterOrderSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    shippingAddress = AddressSerializer()
    class Meta():
        model = RegisterOrder
        fields = '__all__'



class UnRegisterOrderSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta():
        model = UnRegisterOrder
        fields = '__all__'

