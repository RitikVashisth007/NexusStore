# Generated by Django 3.2.4 on 2021-06-04 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userProfile', '0005_auto_20210604_1321'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='pincode',
            field=models.IntegerField(),
        ),
    ]
