from ....database.database import IncomeRegion, LossRegion, OverdueDebtRegion, Region, get_db, Session
from ....database.models.region import RegionModel, BaseRelationRegionModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from typing import List
from datetime import date

router = APIRouter(
    prefix="/region",
    tags=["Region"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=RegionModel, response_class=ORJSONResponse)
async def create(name: str, db: Session = Depends(get_db)):
    region = Region(name=name)
    db.add(region)
    db.commit()
    return region


@router.get("",  response_model=List[RegionModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    """Получение конкретного регоина"""
    filter = (None == None) if id == None else (
        Region.id == id)
    return db.query(Region).filter(filter).all()


@router.post("/income/{region_id}", response_model=BaseRelationRegionModel, response_class=ORJSONResponse)
async def create(region_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Доходы области"""
    organization = db.query(Region).filter(
        Region.id == region_id).first()
    income = IncomeRegion(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/income/{region_id}", response_model=List[BaseRelationRegionModel], response_class=ORJSONResponse)
async def get(region_id: int,  db: Session = Depends(get_db)):
    """Все Доходы области"""
    return db.query(IncomeRegion).filter(IncomeRegion.region_id == region_id).all()


@router.post("/loss/{region_id}", response_model=BaseRelationRegionModel, response_class=ORJSONResponse)
async def create(region_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """убытки области"""
    organization = db.query(Region).filter(
        Region.id == region_id).first()
    income = LossRegion(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/loss/{region_id}", response_model=List[BaseRelationRegionModel], response_class=ORJSONResponse)
async def get(region_id: int,  db: Session = Depends(get_db)):
    """Все убытки области"""
    return db.query(LossRegion).filter(LossRegion.region_id == region_id).all()


@router.post("/debt/{region_id}", response_model=BaseRelationRegionModel, response_class=ORJSONResponse)
async def create(region_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Просроченная задолженность области"""
    organization = db.query(Region).filter(
        Region.id == region_id).first()
    income = OverdueDebtRegion(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/debt/{region_id}", response_model=List[BaseRelationRegionModel], response_class=ORJSONResponse)
async def get(region_id: int,  db: Session = Depends(get_db)):
    """Получение всех зодолжностей области"""
    return db.query(OverdueDebtRegion).filter(OverdueDebtRegion.region_id == region_id).all()
