import os

PROJECT_NAME = os.getenv('PROJECT_NAME', 'LifeTech Hack Backend')
API_V1_PREFIX = '/api/v1'

JWT_SECRET = 'kUVwSgryxDI5vR9pDEYOQAqukdFZzXV1s6swUXJlgQxK96oI81LPOCgwB5VRLbmQ'
JWT_ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7

ROLES = {
    0: 'admin',
    1: 'user'
}

LIVING_WAGE = {
    'default': 10465,
    'worker': 11080,
    'retiree': 8917,
    'children': 10674
}
