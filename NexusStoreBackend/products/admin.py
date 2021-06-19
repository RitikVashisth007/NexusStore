from django.contrib import admin

from .models import *

class AdminProdcut(admin.ModelAdmin):
    list_display = ['title','category','uploaded']

class AdminFeatureListing(admin.ModelAdmin):
    list_display = ['title','category','uploaded']

class AdminFeatureProduct(admin.ModelAdmin):
    list_display = ['id','product']


admin.site.register(Product, AdminProdcut)
admin.site.register(FeatureListing, AdminFeatureListing)
admin.site.register(FeatureProduct, AdminFeatureProduct)