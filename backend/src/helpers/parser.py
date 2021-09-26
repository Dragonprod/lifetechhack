import requests
import json


def parser():
    ways = [
        808749313,
        66837995,
        67626228,
        61560523,
        67626244,
        62361941,
        61561089,
        61561090,
        67328867,
        67626230,
        67626223,
        67626250,
        67328892,
        67626255,
        67328896,
        67626270,
        67626245,
        67328876,
        67626246,
        61561092,
        55455727,
        67626241,
        286330778,
        70107676,
        67626249,
        67626224,
        67626257,
        478264331,
        70107658,
        70107673,
        478264330,
        67626229,
        67626233
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
