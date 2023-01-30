from .base import *
import os

SECRET_KEY = os.environ['SECRET_KEY']
DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1','localhost']
STATIC_ROOT = os.path.join(BASE_DIR,'static')