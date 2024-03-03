from django.contrib.auth.models import Group, User
from rest_framework import serializers
from api import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email',]

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Quest
        fields = '__all__'

