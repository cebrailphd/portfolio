from .base import *
import os

SECRET_KEY = os.getenv('SECRET_KEY')
DEBUG = False

ALLOWED_HOSTS = ['cebo.pythonanywhere.com','127.0.0.1','localhost']
STATIC_ROOT = os.path.join(BASE_DIR,'static')