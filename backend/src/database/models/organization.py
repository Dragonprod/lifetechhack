from pydantic import BaseModel
import typing
from datetime import date


class OrganizationModel(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True


class BaseRelationOrganizationModel(BaseModel):
    id = int
    organization_id = int
    # Очётный месяц
    count = int
    date = date

    class Config:
        orm_mode = True
