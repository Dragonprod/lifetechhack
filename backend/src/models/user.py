from typing import Optional
from pydantic import BaseModel
from ..core.security import verify_password, get_password_hash


class UserBase(BaseModel):
    username: str
    email: str
    avatar: Optional[str] = None
    role_id: int
    name: str
    surname: str
    patronymic: Optional[str] = None


class UserInDb(UserBase):
    password: str

    def encode_password(self, passwd: str) -> str:
        return get_password_hash(passwd)

    def check_password(self, passwd: str) -> bool:
        return verify_password(passwd, self.password)


class UserInLogin(BaseModel):
    email: str
    password: str


class UserInCreate(UserInLogin):
    username: str
    role_id: int


class UserInResponse(UserBase):
    token: str


class UserInDocuments(UserBase): 
    passportId: str
    passportGiveDate: str
    passportCode: str
    passportGiveBy: str
    passportBirthCity: str

    snilsId: str
    
    regStreet: str
    regHouse: str
    regFlat: int

    
# class UserInFamily(UserBase): 
#     raise NotImplementedError
    

# class UserInProperty(UserBase): 
#     raise NotImplementedError
    

# class UserInWork(UserBase): 
#     raise NotImplementedError
    