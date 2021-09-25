from ....models.user import UserBase, UserInDocuments, UserProfile
from datetime import date
from ....database.database import BelowTheValueLivingWage, User, get_db, Session, IncomePopulation, LossPopulation, DepositsOfIndividuals, DebtsOfIndividuals
from ....database.models.population import PopulationModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from typing import List

router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
    responses={404: {"description": "Not found"}},
)


@router.get("/{id}", response_model=UserInDocuments, response_class=ORJSONResponse)
async def create(id: int, db: Session = Depends(get_db)):
    """Профиль гражданина """
    user = db.query(User).filter(User.id == id).first()
    return user
