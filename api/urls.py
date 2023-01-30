from django.urls import path
from rest_framework import routers
from . import views

urlpatterns = [
]
router = routers.DefaultRouter()
router.register('users', views.UserViewSet)

urlpatterns += router.urls