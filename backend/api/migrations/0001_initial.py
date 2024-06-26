# Generated by Django 5.0.2 on 2024-03-03 16:21

import django.core.validators
import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='InternetFacility',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('g5', models.BooleanField(default=False)),
                ('g4', models.BooleanField(default=False)),
                ('broadband', models.BooleanField(default=False)),
                ('wifi', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('language', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='CityDetail',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('population', models.PositiveIntegerField()),
                ('avg_annual_income', models.PositiveIntegerField()),
                ('local_industries', models.TextField(verbose_name='local industries')),
                ('immigrants', models.BooleanField()),
                ('attractions', models.TextField(verbose_name='attractions')),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.city')),
                ('internet_facilities', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.internetfacility')),
                ('language', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.language')),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('latitude', models.FloatField()),
                ('longitude', models.FloatField()),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.city')),
            ],
        ),
        migrations.CreateModel(
            name='Quest',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('poster', models.URLField(verbose_name='poster URL')),
                ('description', models.TextField(verbose_name='description')),
                ('learnings', models.TextField(verbose_name='learnings')),
                ('start_date', models.DateField(verbose_name='start date')),
                ('end_date', models.DateField(verbose_name='end date')),
                ('max_registrations', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(5000)], verbose_name='max registrations')),
                ('registration_ends', models.DateField(verbose_name='registration ends')),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.location')),
            ],
        ),
        migrations.CreateModel(
            name='Requirement',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('requirements', models.TextField(verbose_name='requirements')),
                ('quest_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requirements', to='api.quest')),
            ],
        ),
        migrations.CreateModel(
            name='Reward',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('reward', models.TextField(verbose_name='reward')),
                ('quest_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rewards', to='api.quest')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=150, unique=True, verbose_name='username')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('is_superuser', models.BooleanField(default=False, verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email address')),
                ('role', models.CharField(max_length=255, verbose_name='role')),
                ('first_name', models.CharField(max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(max_length=30, verbose_name='last name')),
                ('date_of_birth', models.DateField(verbose_name='date of birth')),
                ('phone_number', models.CharField(max_length=15, verbose_name='phone number')),
                ('occupation', models.CharField(max_length=255, verbose_name='occupation')),
                ('hobbies', models.CharField(max_length=255, verbose_name='hobbies')),
                ('groups', models.ManyToManyField(related_name='custom_user_set', to='auth.group')),
                ('user_permissions', models.ManyToManyField(related_name='custom_user_set', to='auth.permission')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='QuestRegistration',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('completed', models.BooleanField(default=False)),
                ('registered_for', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='registrations', to='api.quest')),
                ('registered_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='registrations', to='api.user')),
            ],
        ),
        migrations.AddField(
            model_name='quest',
            name='owner_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user'),
        ),
    ]
