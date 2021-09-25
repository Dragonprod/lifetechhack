from typing import Optional
from pydantic import BaseModel


class UserBase(BaseModel):
    id: int
    email: str
    is_admin: bool

    class Config:
        orm_mode = True


class UserInDb(UserBase):
    password: str


class UserInLogin(BaseModel):
    email: str
    password: str


class UserInCreate(UserInLogin):
    is_admin: bool


class UserInResponse(BaseModel):
    token: str


class UserInDocuments(BaseModel):
    id: int
    email: str
    passportId: str = None
    passportGiveDate: str = None
    passportCode: str = None
    passportGiveBy: str = None
    passportBirthCity: str = None
    snilsId: str = None
    regStreet: str = None
    regHouse: str = None
    regFlat: int = None

    class Config:
        orm_mode = True


class UserProfile(BaseModel):
    user = UserBase
