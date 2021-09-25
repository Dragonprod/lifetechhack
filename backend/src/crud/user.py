from ..models.user import UserInCreate, UserInDb, UserInLogin
from ..database.database import get_db, Session
from ..helpers.exceptions import EntityDoesNotExist
from fastapi import Depends


async def create_user(user: UserInCreate, db: Session = Depends(get_db)) -> UserInDb:
    user = UserInDb(**user.dict())
    user.password = user.encode_password(user.password)
    # TODO: Inser data to DataBase
    return UserInDb(**user.dict())


async def find_user_by_email(email: str, db: Session = Depends(get_db)) -> UserInDb:
    # TODO: Find user by email
    result = True
    if result:
        return UserInDb(**result)

    raise EntityDoesNotExist()
