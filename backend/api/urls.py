from django.urls import path
from api import views

urlpatterns = [
    path('', views.test),
    path('login/', views.login, name='login'),
    path('verify/', views.get_user, name='verify'),
    path('signup/', views.signup, name='signup'),
]
