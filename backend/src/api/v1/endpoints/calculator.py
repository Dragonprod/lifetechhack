from ....database.models.calc import CalcModel
from ....core.config import JWT_SECRET
from ....helpers.exceptions import EntityDoesNotExist
from ....core.jwt import create_access_token
from ....database.database import Ans, Report, User, get_db, Session
from fastapi import APIRouter, Body, Depends
from starlette.exceptions import HTTPException
from starlette.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_202_ACCEPTED, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND

from ....models.calculation import QuestionBase, QuestionBaseResponse


router = APIRouter()


@router.post(
    "/calc/start",
    response_model=QuestionBaseResponse,
    tags=["calculation"],
    status_code=HTTP_200_OK,
)
async def start_calc(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        return HTTPException(HTTP_404_NOT_FOUND)

    report = Report(user_id=user.id)
    db.add(report)
    db.commit()

    return QuestionBaseResponse(user_id=user_id, report_id=report.id, step=1)


@router.put(
    "/calc/{report_id}",
    response_model=QuestionBaseResponse,
    tags=["calculation"],
    status_code=HTTP_200_OK,
)
async def update(report_id: int, ans: str, step: int, db: Session = Depends(get_db)):
    report = db.query(Report).filter(Report.id == report_id).first()
    if report is None:
        return HTTPException(HTTP_404_NOT_FOUND)
    report.anses.append(Ans(step=step, ans=ans))
    return QuestionBaseResponse(user_id=report.user_id, report_id=report.id, step=step+1)


@router.post(
    "/calc/stop",
    response_model=CalcModel,
    tags=["calculation"],
    status_code=HTTP_200_OK,
)
async def stop(report_id: int, db: Session = Depends(get_db)):
    report = db.query(Report).filter(Report.id == report_id).first()
    if report is None:
        return HTTPException(HTTP_404_NOT_FOUND)
    anses = report.anses
    persons = 1
    disease = ""
    income = 0
    q = 0
    income += int(anses[q].ans)
    q += 1
    if anses[q].ans == "Да":
        q += 1
        persons += 1
        income += int(anses[q].ans)
    q += 1
    anses[q].ans  # Имущество
    q += 1
    if anses[q].ans is not None:
        disease = anses[q].ans
    q += 1
    persons += anses[q].ans
    report.complited = True

    return CalcModel(id=report_id, poor=True,  disease=disease)
