from datetime import date
from ....database.database import BelowTheValueLivingWage, get_db, Session, IncomePopulation, LossPopulation, DepositsOfIndividuals, DebtsOfIndividuals
from ....database.models.population import PopulationModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends


router = APIRouter(
    prefix="/population",
    tags=["Population"],
    responses={404: {"description": "Not found"}},
)


@router.post("/ValueLivingWag", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(year: date, persent: int, db: Session = Depends(get_db)):
    """Доля населения с 
    денежными доходами
    ниже величины 
    прожиточного минимума"""
    value = BelowTheValueLivingWage(date=date, year=year, persent=persent)
    db.add(value)
    db.commit()
    return value


@router.get("/ValueLivingWag{id}", response_model=PopulationModel, response_class=ORJSONResponse)
async def get(id: int, db: Session = Depends(get_db)):
    """Доля населения с 
    денежными доходами
    ниже величины 
    прожиточного минимума"""
    return db.query(BelowTheValueLivingWage).filter(BelowTheValueLivingWage.id == id).first()


@router.post("/income", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Доходы населения"""
    income = IncomePopulation(date=date, count=count)
    db.add(income)
    db.commit()
    return income


@router.get("/income/{id}", response_model=PopulationModel, response_class=ORJSONResponse)
async def get(id: int, db: Session = Depends(get_db)):
    """Доходы населения"""
    return db.query(IncomePopulation).filter(IncomePopulation.id == id).first()


@router.post("/loss", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Убытки населения"""
    loss = LossPopulation(date=date, count=count)
    db.add(loss)
    db.commit()
    return loss


@router.get("/loss/{id}", response_model=PopulationModel, response_class=ORJSONResponse)
async def get(id: int, db: Session = Depends(get_db)):
    """Убытки населения"""
    return db.query(LossPopulation).filter(LossPopulation.id == id).first()


@router.post("/deposit", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Вклады (депозиты) физических лиц на рублевых счетах"""
    deposit = DepositsOfIndividuals(date=date, count=count)
    db.add(deposit)
    db.commit()
    return deposit


@router.get("/deposit/{id}", response_model=PopulationModel, response_class=ORJSONResponse)
async def get(id: int, db: Session = Depends(get_db)):
    """Вклады (депозиты) физических лиц на рублевых счетах"""
    return db.query(DepositsOfIndividuals).filter(DepositsOfIndividuals.id == id).first()


@router.post("/debts", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Задолженность по рублевым кредитам физических лиц"""
    debts = DebtsOfIndividuals(date=date, count=count)
    db.add(debts)
    db.commit()
    return debts


@router.get("/debts/{id}", response_model=PopulationModel, response_class=ORJSONResponse)
async def get(id: int, db: Session = Depends(get_db)):
    """Задолженность по рублевым кредитам физических лиц"""
    return db.query(DebtsOfIndividuals).filter(DebtsOfIndividuals.id == id).first()
