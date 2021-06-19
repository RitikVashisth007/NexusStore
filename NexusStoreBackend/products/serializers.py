from django.db.models import fields
from rest_framework import serializers
from .models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta():
        model = Product
        fields = '__all__'  


class FeatureListingSerializer(serializers.ModelSerializer):
    class Meta():
        model = FeatureListing
        fields = '__all__' 





class FeatureProductSerializer(serializers.ModelSerializer):
    product = ProductSerializer()
    class Meta():
        model = FeatureProduct
        fields = '__all__' 