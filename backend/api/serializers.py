from django.contrib.auth.models import Group, User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    # password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email',]
    # def validate_password(self, value):
    #     validate_password(value)
    #     return value

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user