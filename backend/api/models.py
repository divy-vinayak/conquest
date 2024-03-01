from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from api.managers import CustomUserManager
# Create your models here.

class User(AbstractUser):
    type = models.CharField(max_length=255, default='user') # candidate or recruiter
    objects = CustomUserManager()

    groups = models.ManyToManyField(Group, related_name='custom_user_set')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_set')

# class Skill(models.Model):
#     name = models.CharField(max_length=100)

# class Town(models.Model):
#     population = models.PositiveIntegerField(null=True, blank=True)
#     avg_annual_income = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
#     immigrants = models.PositiveIntegerField(null=True, blank=True)
#     language = models.CharField(max_length=100, null=True, blank=True)
#     internet_availability = models.BooleanField(default=False)
#     skills_gained = models.ManyToManyField(Skill, blank=True)

# class Industry(models.Model):
#     town = models.ForeignKey(Town, on_delete=models.CASCADE, related_name='industries')
#     name = models.CharField(max_length=255)

# class Attraction(models.Model):
#     town = models.ForeignKey(Town, on_delete=models.CASCADE, related_name='attractions')
#     name = models.CharField(max_length=255)

# class Location(models.Model):
#     city = models.CharField(max_length=100)
#     country = models.CharField(max_length=100)
#     latitude = models.FloatField()
#     longitude = models.FloatField()

# class Quest(models.Model):
#     title = models.CharField(max_length=255)
#     img = models.ImageField(upload_to='quest_images/')
#     description = models.TextField()
#     locations = models.ManyToManyField(Location, through='QuestLocation')
#     requirements = models.ManyToManyField('Requirement')
#     rewards = models.ManyToManyField('Reward')
#     town = models.ForeignKey(Town, on_delete=models.SET_NULL, null=True, blank=True)
#     starting_date = models.DateField(null=True, blank=True)
#     end_date = models.DateField(null=True, blank=True)

# class QuestLocation(models.Model):
#     quest = models.ForeignKey(Quest, on_delete=models.CASCADE)
#     location = models.ForeignKey(Location, on_delete=models.CASCADE)

# class Requirement(models.Model):
#     requirement = models.CharField(max_length=255)

# class Reward(models.Model):
#     reward = models.CharField(max_length=255)
