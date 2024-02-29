from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from api.managers import CustomUserManager
# Create your models here.

class User(AbstractUser):
    type = models.CharField(max_length=255, default='user') # candidate or recruiter
    objects = CustomUserManager()

    groups = models.ManyToManyField(Group, related_name='custom_user_set')
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_set')