from pydantic import BaseModel
import typing
from datetime import date


class PopulationModel(BaseModel):
    id: int
    date: date
    count: int

    class Config:
        orm_mode = True
