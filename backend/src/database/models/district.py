from pydantic import BaseModel
import typing
from datetime import date


class DistrictModel(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


class BaseRelationDistrictModel(BaseModel):
    id: int
    district_id: int
    count: int
    date: date

    class Config:
        orm_mode = True
