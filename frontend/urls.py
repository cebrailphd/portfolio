from django.urls import path
from .views import index
urlpatterns = [
    path('', index),
    path('about', index),
    path('research', index),
    path('photography', index),

]