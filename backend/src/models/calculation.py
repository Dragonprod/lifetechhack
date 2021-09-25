from typing import Optional
from pydantic import BaseModel


class QuestionBase(BaseModel):
    step: int
    value: str


class QuestionInProperty(QuestionBase):
    cars: int
    flats: int
    houses: int


class QuestionInHealth(QuestionBase):
    disabledPerson: Optional[str] = None
    chronicDiseases: Optional[str] = None
    pregnancy: Optional[str] = None    

class QuestionBaseResponse(QuestionBase):
    result: int