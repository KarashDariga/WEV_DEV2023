"""
ASGI config for hh_back project.
It exposes the ASGI callable as a module-level variable named ``application``.
For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'hh_back.settings')

application = get_asgi_application()