# Generated by Django 5.0.2 on 2024-03-03 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='date_of_birth',
            field=models.DateField(null=True, verbose_name='date of birth'),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(max_length=30, null=True, verbose_name='first name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='hobbies',
            field=models.CharField(max_length=255, null=True, verbose_name='hobbies'),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(max_length=30, null=True, verbose_name='last name'),
        ),
        migrations.AlterField(
            model_name='user',
            name='occupation',
            field=models.CharField(max_length=255, null=True, verbose_name='occupation'),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.CharField(max_length=15, null=True, verbose_name='phone number'),
        ),
    ]