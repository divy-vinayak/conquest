from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils.translation import gettext_lazy as _
from django.core.validators import MaxValueValidator
from api.managers import CustomUserManager
# Create your models here.

class City(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    # username = models.CharField(_('username'), max_length=150, unique=True)
    password = models.CharField(_('password'), max_length=128)
    is_superuser = models.BooleanField(_('superuser status'), default=False)
    email = models.EmailField(_('email address'), unique=True)
    role = models.CharField(_('role'), max_length=255)
    first_name = models.CharField(_('first name'), max_length=30, null=True)
    last_name = models.CharField(_('last name'), max_length=30, null=True)
    date_of_birth = models.DateField(_('date of birth'), null=True)
    phone_number = models.CharField(_('phone number'), max_length=15, null=True)
    occupation = models.CharField(_('occupation'), max_length=255, null=True)
    hobbies = models.CharField(_('hobbies'), max_length=255, null=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE, null=True)
    address = models.TextField(_('address'), null=True)

    objects = CustomUserManager()

    groups = models.ManyToManyField(Group, related_name='custom_user_set')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_set')

class Location(models.Model):
    id = models.AutoField(primary_key=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f"{self.city.name}, ({self.latitude}, {self.longitude})"

class Quest(models.Model):
    id = models.AutoField(primary_key=True)
    owner_id = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(_('title'), max_length=255)
    poster = models.URLField(_('poster URL'))
    description = models.TextField(_('description'))
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    learnings = models.TextField(_('learnings'))
    start_date = models.DateField(_('start date'))
    end_date = models.DateField(_('end date'))
    max_registrations = models.PositiveIntegerField(_('max registrations'), validators=[MaxValueValidator(5000)])
    registration_ends = models.DateField(_('registration ends'))

    def __str__(self):
        return self.title
    
class QuestRegistration(models.Model):
    id = models.AutoField(primary_key=True)
    registered_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='registrations')
    registered_for = models.ForeignKey(Quest, on_delete=models.CASCADE, related_name='registrations')
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"Registration {self.id} for {self.registered_for.title} by {self.registered_by.username}"

class Reward(models.Model):
    id = models.AutoField(primary_key=True)
    quest_id = models.ForeignKey(Quest, on_delete=models.CASCADE, related_name='rewards')
    reward = models.TextField(_('reward'))

    def __str__(self):
        return f"Reward {self.id} for {self.quest_id.title}"

class Requirement(models.Model):
    id = models.AutoField(primary_key=True)
    quest_id = models.ForeignKey(Quest, on_delete=models.CASCADE, related_name='requirements')
    requirements = models.TextField(_('requirements'))

    def __str__(self):
        return f"Requirements {self.id} for {self.quest_id.title}"
    
class Language(models.Model):
    id = models.AutoField(primary_key=True)
    language = models.CharField(max_length=255)

    def __str__(self):
        return self.language

class InternetFacility(models.Model):
    id = models.AutoField(primary_key=True)
    g5 = models.BooleanField(default=False)
    g4 = models.BooleanField(default=False)
    broadband = models.BooleanField(default=False)
    wifi = models.BooleanField(default=False)

    def __str__(self):
        return f"Internet Facility {self.id}"

class CityDetail(models.Model):
    id = models.AutoField(primary_key=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    population = models.PositiveIntegerField()
    avg_annual_income = models.PositiveIntegerField()
    local_industries = models.TextField(_('local industries'))
    immigrants = models.BooleanField()
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    attractions = models.TextField(_('attractions'))
    internet_facilities = models.ForeignKey(InternetFacility, on_delete=models.CASCADE)

    def __str__(self):
        return f"Details for {self.city.name}"

