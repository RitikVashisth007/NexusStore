# Generated by Django 3.2.4 on 2021-06-14 18:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0009_auto_20210615_0004'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registerorder',
            name='qty',
        ),
        migrations.RemoveField(
            model_name='unregisterorder',
            name='qty',
        ),
    ]
