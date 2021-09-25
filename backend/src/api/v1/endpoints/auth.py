from ....core.config import JWT_SECRET
from ....helpers.exceptions import EntityDoesNotExist
from ....core.jwt import create_access_token
from ....database.database import get_db, Session
from fastapi import APIRouter, Body, Depends
from starlette.exceptions import HTTPException
from starlette.status import HTTP_201_CREATED, HTTP_202_ACCEPTED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND 

from ....crud.user import create_user, find_user_by_email
from ....models.user import UserBase, UserInCreate, UserInDb, UserInLogin, UserInResponse


router = APIRouter()


@router.post(
    "/users/create",
    response_model=UserInResponse,
    tags=["authentication"],
    status_code=HTTP_201_CREATED,
)
async def register_user(user: UserInCreate = Body(...), db: Session = Depends(get_db)):
    dbuser = await create_user(user, db)
    token = create_access_token(user, JWT_SECRET)
    return UserInResponse(
        username=dbuser.username,
        email=dbuser.email,
        avatar=dbuser.avatar,
        role_id=dbuser.role_id,
        token=token,
    )


@router.post(
    "/users/login",
    response_model=UserInResponse,
    tags=["authentication"],
    status_code=HTTP_202_ACCEPTED,
)
async def login_user(user: UserInLogin = Body(...), db: Session = Depends(get_db)):
    try:
        dbuser = await find_user_by_email(db, email=user.email)
    except EntityDoesNotExist:
        raise HTTPException(HTTP_404_NOT_FOUND)

    if not dbuser.check_password(user.password):
        raise HTTPException(HTTP_400_BAD_REQUEST)

    token = create_access_token(UserBase(**dbuser.dict()), JWT_SECRET)

    return UserInResponse(
        username=dbuser.username,
        email=dbuser.email,
        avatar=dbuser.avatar,
        role_id=dbuser.role_id,
        token=token,
    )