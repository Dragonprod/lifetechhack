from ....core.config import JWT_SECRET
from ....helpers.exceptions import EntityDoesNotExist
from ....core.jwt import create_access_token
from ....database.database import get_db, Session
from fastapi import APIRouter, Body, Depends
from starlette.exceptions import HTTPException
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_202_ACCEPTED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND

from ....models.calculation import QuestionBaseResponse, QuestionBase


router = APIRouter()


@router.post(
    "/calc",
    response_model=QuestionBaseResponse,
    tags=["calculation"],
    status_code=HTTP_200_OK,
)
async def process_calculation(question: QuestionBase = Body(...), db: Session = Depends(get_db)):
    if (question.step == 0):
        return QuestionBaseResponse(result=0)
    elif (question.step == 1):
        return QuestionBaseResponse(result=0)
    elif (question.step == 2):
        return QuestionBaseResponse(result=0)
    elif (question.step == 3):
        return QuestionBaseResponse(result=0)
    elif (question.step == 4):
        return QuestionBaseResponse(result=0)
    elif (question.step == 5):
        return QuestionBaseResponse(result=0)
    elif (question.step == 6):
        return QuestionBaseResponse(result=0)


async def check_question_answer(question):
    pass
