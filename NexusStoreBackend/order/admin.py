from django.contrib import admin
from .models import *

# Register your models here.

class CartAdmin(admin.ModelAdmin):
    list_display = ['user','product']

class RegisterOrderAdmin(admin.ModelAdmin):
    list_display = ['user','isDelivered', 'shippingAddress']

class UnRegisterOrderAdmin(admin.ModelAdmin):
    list_display = ['name','isDelivered', 'state']



admin.site.register(RegisterOrder , RegisterOrderAdmin)
admin.site.register(UnRegisterOrder , UnRegisterOrderAdmin)

admin.site.register(Cart, CartAdmin)