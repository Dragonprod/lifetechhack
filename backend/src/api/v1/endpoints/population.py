from datetime import date
from ....database.database import BelowTheValueLivingWage, get_db, Session, IncomePopulation, LossPopulation, DepositsOfIndividuals, DebtsOfIndividuals
from ....database.models.population import PopulationModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from typing import List

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


@router.get("/ValueLivingWag", response_model=List[PopulationModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    """Доля населения с 
    денежными доходами
    ниже величины 
    прожиточного минимума"""
    filter = (None == None) if id == None else (
        IncomePopulation.id == id)
    return db.query(IncomePopulation).filter(filter).all()


@router.post("/income", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Доходы населения"""
    income = IncomePopulation(date=date, count=count)
    db.add(income)
    db.commit()
    return income


@router.get("/income", response_model=List[PopulationModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    """Доходы населения"""
    filter = (None == None) if id == None else (
        IncomePopulation.id == id)
    return db.query(IncomePopulation).filter(filter).all()


@router.post("/loss", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Убытки населения"""
    loss = LossPopulation(date=date, count=count)
    db.add(loss)
    db.commit()
    return loss


@router.get("/loss", response_model=List[PopulationModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    """Убытки населения"""
    filter = (None == None) if id == None else (
        LossPopulation.id == id)
    return db.query(LossPopulation).filter(filter).all()


@router.post("/deposit", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Вклады (депозиты) физических лиц на рублевых счетах"""
    deposit = DepositsOfIndividuals(date=date, count=count)
    db.add(deposit)
    db.commit()
    return deposit


@router.get("/deposit", response_model=List[PopulationModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    """Вклады (депозиты) физических лиц на рублевых счетах"""
    filter = (None == None) if id == None else (
        DebtsOfIndividuals.id == id)
    return db.query(DepositsOfIndividuals).filter(filter).all()


@router.post("/debts", response_model=PopulationModel, response_class=ORJSONResponse)
async def create(date: date, count: int, db: Session = Depends(get_db)):
    """Задолженность по рублевым кредитам физических лиц"""
    debts = DebtsOfIndividuals(date=date, count=count)
    db.add(debts)
    db.commit()
    return debts


@router.get("/debts", response_model=List[PopulationModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    """Задолженность по рублевым кредитам физических лиц"""
    filter = (None == None) if id == None else (
        DebtsOfIndividuals.id == id)
    return db.query(DebtsOfIndividuals).filter(filter).all()
