from django.contrib.admin.options import TabularInline
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    phone = models.IntegerField( blank=True)
    street = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    pincode = models.IntegerField()
    def __str__(self):
        return str(self.name +' _ '+ self.city)




class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    phone = models.IntegerField( blank=True, null=True)
    address = models.ForeignKey(Address, on_delete=models.SET_NULL, blank=True , null=True)
    dob = models.DateField(blank=True, null=True  )

    def __str__(self):
        return str(self.user)
    
 