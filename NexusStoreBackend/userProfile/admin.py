from django.contrib import admin
from .models import *

# Register your models here.

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'address')


class AddressAdmin(admin.ModelAdmin):
    list_display = ('name',  'city' , 'pincode')


admin.site.register(Profile , ProfileAdmin)
admin.site.register(Address , AddressAdmin)