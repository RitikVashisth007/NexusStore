# Generated by Django 3.2.4 on 2021-06-12 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userProfile', '0008_alter_address_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='address',
            name='phone',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
