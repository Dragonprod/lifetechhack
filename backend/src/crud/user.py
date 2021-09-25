from ..core.security import get_password_hash
from ..models.user import UserInCreate, UserInDb, UserInLogin, UserBase
from ..database.database import User, get_db, Session
from ..helpers.exceptions import EntityDoesNotExist
from fastapi import Depends


async def create_user(user, db: Session = Depends(get_db)):
    if db.query(User).filter(User.email == user.email).first() == None:
        user.password = get_password_hash(user.password)
        new_user = User(email=user.email, password=user.password)
        db.add(new_user)
        db.commit()
        # TODO: Inser data to DataBase
        return UserBase(id=new_user.id, email=user.email)
    else:
        return None


async def find_user_by_email(email: str, db: Session = Depends(get_db)):
    result = True
    if result:
        return UserInDb(**result)

    raise EntityDoesNotExist()
