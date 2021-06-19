from django.db import models
from django.db.models.fields import CharField
from rest_framework.fields import ChoiceField

# Create your models here.


PRODUCT_CATEGORY = [
    ('Electronic', 'Electronic'),
    ('Fashion', 'Fashion',),
    ('Mobile', 'Mobile'),
    
    ('Applicances', 'Applicances'),
]

FEATURE_CATEGORY = [
    ('Sale', 'Sale'),
    ('Product', 'Product',),
    
]




SUB_CATEGORY = [
    ('Electronic', (
        
        ('Laptop','Laptop'),
        ('Desktop','Destop'),

        ('Speakers','Speakers'),
        ('Console','Console'),
        ('Accessories','Accessories'),
        ('Smartwatch','Smartwatch'),

    )),

    ('Fashion', (
        ('Men','Men'),
        ('Women','Women'),
        ('Kids','Kids'),

    )),
    ('Phone', (
        ('Smartphone','Smartphone'),
        ('Keypad','Keypad'),
        ('Tablet','Tablet'),

    )),
    ('Applicances', (
        ('Washingmachince','Washingmachine'),
        ('TV','TV'),
        ('AC','AC'),
        ('KitchenApplicance','KitchenApplicance'),
        ('HomeApplicance','HomeApplicance'),
        


    )),
    
    
]



class Product(models.Model):
    title = models.CharField(max_length=70)
    brand = models.CharField(max_length=70)
    mrp_price = models.IntegerField()
    price = models.IntegerField() 
    poster = models.ImageField(upload_to='product/', blank=True)
    main_photo = models.ImageField(upload_to='product/')
    photo1 = models.ImageField(upload_to='product/' , blank=True )
    photo2 = models.ImageField(upload_to='product/', blank=True)
    photo3 = models.ImageField(upload_to='product/' , blank=True)
    photo4 = models.ImageField(upload_to='product/' , blank=True)
    description = models.TextField(blank=True)
    stock = models.IntegerField()
    category = models.CharField( max_length=80, choices=PRODUCT_CATEGORY)
    subcategory = models.CharField( max_length=80, choices=SUB_CATEGORY)

    uploaded = models.DateField(auto_now_add=True)

    keywords = models.CharField(max_length=250)


    def __str__(self):
        return str(self.title)



class FeatureListing(models.Model):
    title = models.CharField(max_length=70)
    
    poster = models.ImageField(upload_to='product/')
    main_photo = models.ImageField(upload_to='product/' , blank=True)
    photo1 = models.ImageField(upload_to='product/' , blank=True )
    photo2 = models.ImageField(upload_to='product/', blank=True)
    photo3 = models.ImageField(upload_to='product/' , blank=True)
    photo4 = models.ImageField(upload_to='product/' , blank=True)
    description = models.TextField(blank=True)

    isLaunched = models.BooleanField(default=True)
    saleType = models.CharField(max_length=80, choices=FEATURE_CATEGORY)
    
    
    category = models.CharField( max_length=80, choices=PRODUCT_CATEGORY)
    subcategory = models.CharField( max_length=80, choices=SUB_CATEGORY , blank=True)

    uploaded = models.DateField(auto_now_add=True)


    def __str__(self):
        return str(self.title)
    
      


class FeatureProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    


    def __str__(self):
        return str(self.product)