from pydantic import BaseModel
import typing
from datetime import date


class CalcModel(BaseModel):
    id: int
    poor: bool
    disease: str
