from pydantic import BaseModel
import typing
from datetime import date


class CityModel(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


class BaseRelationCityModel(BaseModel):
    id = int
    city_id = int
    # Очётный месяц
    count = int
    date = date

    class Config:
        orm_mode = True
