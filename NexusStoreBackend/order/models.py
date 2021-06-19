from products.models import Product
from userProfile.models import Address
from django.db import models
from django.contrib.auth.models import User
from userProfile.models import *


class RegisterOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.DO_NOTHING, null=True)
    isDelivered = models.BooleanField(default=False)
    createdAt = models.DateField(auto_now_add=True)
    shippingAddress = models.ForeignKey(Address, on_delete=models.DO_NOTHING)
    qty = models.IntegerField(default=1)
    def __str__(self):
        return str(self.user)





class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True) 
    qty = models.IntegerField(default=1)

    def __str__(self):
        return str(str(self.user)+" "+ str(self.product))




class UnRegisterOrder(models.Model):
    product = models.ForeignKey(Product, on_delete=models.DO_NOTHING, null=True)

    isDelivered = models.BooleanField(default=False)
    createdAt = models.DateField(auto_now_add=True)
    name = models.CharField(max_length=50)
    phone = models.IntegerField( blank=True)
    street = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.IntegerField()
    qty = models.IntegerField(default=1)


    def __str__(self):
        return str(self.name)