import requests
import json


def parser():
    ways = [
        68709337,
        61558025,
        68565544,
        68565593,
        68565566,
        216792001,
        68565580,
        216792071,
        216792101,
        216792093,
        68565586,
        68565558,
        546644677,
        216792123,
        46609718,
        216954250,
        68565575,
        216954241,
        68565606,
        68565616,
        197563581,
        197563593,
        216954235,
        216954254,
        197563569,
        197563590,
        216954259,
        216954237,
        68565600,
        205672448,
        205672455,
        61558027,
        68548402,
        61558196,
        68565621,
        68565612,
        68709346,
        68565554
    ]
    geometry = []
    for way in ways:
        print(f'Parsing - {way}')
        response = requests.get(
            f'https://overpass-api.de/api/interpreter?data=[out:json];way({way});out ids geom;')
        data = response.json()
        print(data)
        geometry.append(data['elements'][0]['geometry'])

    with open('map.json', 'w') as f:
        json.dump(geometry, f)


parser()
