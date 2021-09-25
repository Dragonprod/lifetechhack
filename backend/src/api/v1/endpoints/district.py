from ....database.database import District, OverdueDebtDistrict, get_db, Session
from ....database.models.district import DistrictModel, BaseRelationDistrictModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from typing import List
from datetime import date


router = APIRouter(
    prefix="/district",
    tags=["District"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=DistrictModel, response_class=ORJSONResponse)
async def create(name: str, db: Session = Depends(get_db)):
    district = District(name=name)
    db.add(district)
    db.commit()
    return district


@router.get("", response_model=List[DistrictModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    filter = (None == None) if id == None else (District.id == id)
    return db.query(District).filter(filter).all()


@router.post("/income/{district_id}", response_model=BaseRelationDistrictModel, response_class=ORJSONResponse)
async def create(district_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Доходы области"""
    organization = db.query(District).filter(
        District.id == district_id).first()
    income = IncomeDistricts(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/income/{district_id}", response_model=List[BaseRelationDistrictModel], response_class=ORJSONResponse)
async def get(district_id: int,  db: Session = Depends(get_db)):
    """Все Доходы области"""
    return db.query(IncomeDistricts).filter(IncomeDistricts.district_id == district_id).all()


@router.post("/loss/{district_id}", response_model=BaseRelationDistrictModel, response_class=ORJSONResponse)
async def create(district_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """убытки области"""
    organization = db.query(District).filter(
        District.id == district_id).first()
    income = LossDistricts(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/loss/{district_id}", response_model=List[BaseRelationDistrictModel], response_class=ORJSONResponse)
async def get(district_id: int,  db: Session = Depends(get_db)):
    """Все убытки области"""
    return db.query(LossDistricts).filter(LossDistricts.district_id == district_id).all()


@router.post("/debt/{district_id}", response_model=BaseRelationDistrictModel, response_class=ORJSONResponse)
async def create(district_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Просроченная задолженность области"""
    organization = db.query(District).filter(
        District.id == district_id).first()
    income = OverdueDebtDistrict(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/debt/{district_id}", response_model=List[BaseRelationDistrictModel], response_class=ORJSONResponse)
async def get(district_id: int,  db: Session = Depends(get_db)):
    """Получение всех зодолжностей области"""
    return db.query(OverdueDebtDistrict).filter(OverdueDebtDistrict.district_id == district_id).all()
