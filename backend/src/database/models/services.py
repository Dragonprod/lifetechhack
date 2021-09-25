from pydantic import BaseModel
import typing
from datetime import date


class ServiceModel(BaseModel):
    id: int
    name: str
    unit: str
    price: float
    date: date

    class Config:
        orm_mode = True
