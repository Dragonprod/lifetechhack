from pydantic import BaseModel
import typing
from datetime import date


class RegionModel(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


class BaseRelationRegionModel(BaseModel):
    id = int
    region_id = int
    count = int
    date = date

    class Config:
        orm_mode = True
