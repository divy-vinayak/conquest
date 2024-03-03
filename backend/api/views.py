from django.contrib.auth.models import User

from api.serializers import UserSerializer
from api import serializers, models
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, authentication_classes
from middleware.auth import Authentication
from django.contrib.auth import authenticate, get_user_model
from rest_framework.response import Response
import jwt
from copy import deepcopy
import datetime

User = get_user_model()

@csrf_exempt
def test(request):
    return JsonResponse({
        'hello': 'world'
    })

@api_view(['POST'])
def login(request):
    try:
        username = request.data['username']
        password = request.data['password']

        user = authenticate(request, username=username, password=password)

        if user is None:
            return Response({"error":"Incorrect credentials"}, status=401)
        
        payload = {
            "username": user.username,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=129600),
            "iat": datetime.datetime.utcnow(),
        }

        token = jwt.encode(payload, 'SECRET', algorithm='HS256')

        return Response({"message": "User Login Sucessful", "token": token}, status=201)

    except Exception as e:
        return Response({"error": str(e)}, status=400)
    
@api_view(['POST'])
def signup(request):
    try:
        user = User.objects.filter(username=request.data['username'])
        if user:
            return Response({"error": "User with this username already exists"}, status=400)
        user = User.objects.filter(email=request.data['email'])
        if user:
            return Response({"error": "User with this email already exists"}, status=400)

        user = UserSerializer(data=request.data)
        if user.is_valid():
            user = user.save()
        else:
            return Response({"error": user.errors}, status=400)
        
        data = deepcopy(request.data)
        data["user"] = user.id

        return Response({"message": "Account Created Successfully"}, status=201)
    except Exception as e:
        print(e)
        return Response({"error": str(e)}, status=400)
    
@api_view(['GET'])
@authentication_classes([Authentication])
def get_user(request):
    try:
        data = dict()
        data["user"] = UserSerializer(request.user).data
        return Response({"message": "User details fetched successfully", "data": data}, status=200)
    except Exception as e:
        return Response({"error": str(e)}, status=400)
    
@api_view(['GET'])
# @authentication_classes([Authentication])
def get_all_quests(request):
    index = int(request.GET.get('index', 0))
    offset = int(request.GET.get('offset', 50))
    quests = models.Quest.objects.all()[index: index + offset]
    quests = serializers.QuestSerializer(quests, many=True)

    return Response({
        'message': 'yay',
        'data': quests.data
    }, status=200)


