# Generated by Django 3.2.4 on 2021-06-16 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0013_featurelisting_saletype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='featurelisting',
            name='saleType',
            field=models.CharField(choices=[('Sale', 'Sale'), ('Product', 'Product')], max_length=80),
        ),
    ]
