from ....database.database import City, IncomeCity, LossCity, OverdueDebtCity, get_db, Session
from ....database.models.city import CityModel, BaseRelationCityModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from typing import List
from datetime import date

router = APIRouter(
    prefix="/city",
    tags=["City"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=CityModel, response_class=ORJSONResponse)
async def create(name: str, db: Session = Depends(get_db)):
    city = City(name=name)
    db.add(city)
    db.commit()
    return city


@router.get("", response_model=List[CityModel], response_class=ORJSONResponse)
async def get(id: int = None,  db: Session = Depends(get_db)):
    filter = (None == None) if id == None else (
        City.id == id)
    return db.query(City).filter(filter).all()


@router.post("/income/{city_id}", response_model=BaseRelationCityModel, response_class=ORJSONResponse)
async def create(city_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Доходы области"""
    organization = db.query(City).filter(
        City.id == city_id).first()
    income = IncomeCity(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/income/{city_id}", response_model=List[BaseRelationCityModel], response_class=ORJSONResponse)
async def get(city_id: int,  db: Session = Depends(get_db)):
    """Все Доходы области"""
    return db.query(IncomeCity).filter(IncomeCity.city_id == city_id).all()


@router.post("/loss/{city_id}", response_model=BaseRelationCityModel, response_class=ORJSONResponse)
async def create(city_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """убытки области"""
    organization = db.query(City).filter(
        City.id == city_id).first()
    income = LossCity(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/loss/{city_id}", response_model=List[BaseRelationCityModel], response_class=ORJSONResponse)
async def get(city_id: int,  db: Session = Depends(get_db)):
    """Все убытки области"""
    return db.query(LossCity).filter(LossCity.city_id == city_id).all()


@router.post("/debt/{city_id}", response_model=BaseRelationCityModel, response_class=ORJSONResponse)
async def create(city_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Просроченная задолженность области"""
    organization = db.query(City).filter(
        City.id == city_id).first()
    income = OverdueDebtCity(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/debt/{city_id}", response_model=List[BaseRelationCityModel], response_class=ORJSONResponse)
async def get(city_id: int,  db: Session = Depends(get_db)):
    """Получение всех зодолжностей области"""
    return db.query(OverdueDebtCity).filter(OverdueDebtCity.city_id == city_id).all()
