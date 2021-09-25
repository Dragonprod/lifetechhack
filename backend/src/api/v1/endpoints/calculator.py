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
    status_code=HTTP_201_CREATED,
)
async def start_calc(user_id: int, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        return HTTPException(HTTP_404_NOT_FOUND)

    steps = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    report = Report(user_id=user.id)
    db.add(report)
    report.anses.extend([Ans(step=step, ans="") for step in steps])
    db.commit()

    return QuestionBaseResponse(user_id=user_id, report_id=report.id, step=1)


@router.put(
    "/calc/{report_id}",
    response_model=QuestionBaseResponse,
    tags=["calculation"],
    status_code=HTTP_200_OK,
)
async def update(report_id: int, ans: str, step: int, db: Session = Depends(get_db)):
    ans_obj = db.query(Ans).filter(
        Ans.report_id == report_id, Ans.step == step).first()
    ans_obj.ans = ans
    if step == 2:
        if ans != 'Женат':
            step += 1
    step += 1

    db.commit()
    return QuestionBaseResponse(report_id=ans_obj.report_id, step=step)


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
    poor = False
    anses = report.anses.all()
    income = int(anses[0].ans)
    person = 1
    help = ""
    try:
        income = int(anses[2].ans) + int(anses[0].ans)
        person += 1
        person += int(anses[3])
    except:
        None

    owners = 0
    try:
        owners += int(anses[4].ans) + int(anses[5].ans) + int(anses[6].ans)
    except:
        None

    if anses[7] != "Нет" or anses[8] != "Нет":
        # help = anses[7] if anses[7] != "Нет" else anses[8]
        help = True
    else:
        help = False

    if owners >= 2 or income/person > 10465:
        poor = True

    report.complited = True
    db.commit()
    return CalcModel(id=report_id, poor=poor, help=help)
