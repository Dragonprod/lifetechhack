from ....database.database import Organization, OverdueDebtRegion, get_db, Session, WagesOrganization, IncomeOrganization, LossOrganization
from ....database.models.organization import OrganizationModel, BaseRelationOrganizationModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from datetime import date
from typing import List


router = APIRouter(
    prefix="/organization",
    tags=["Organization"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=OrganizationModel, response_class=ORJSONResponse)
async def create(name: str, db: Session = Depends(get_db)):
    organization = Organization(name=name)
    db.add(organization)
    db.commit()
    return organization


@router.get("", response_model=List[OrganizationModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    filter = (None == None) if id == None else (
        Organization.id == id)
    return db.query(Organization).filter(filter).all()


@router.post("/wages/{organization_id}", response_model=BaseRelationOrganizationModel, response_class=ORJSONResponse)
async def create(organization_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """ЗАРАБОТНАЯ ПЛАТА ОРГАНИЗАЦИИ"""
    organization = db.query(Organization).filter(
        Organization.id == organization_id).first()
    wage = WagesOrganization(count=count, date=date)
    organization.wages.append(wage)
    db.commit()
    return wage


@router.get("/wages/{organization_id}", response_model=List[BaseRelationOrganizationModel], response_class=ORJSONResponse)
async def get(organization_id: int, db: Session = Depends(get_db)):
    """Вся ЗАРАБОТНАЯ ПЛАТА ОРГАНИЗАЦИИ"""
    return db.query(WagesOrganization).filter(WagesOrganization.organization_id == organization_id).all()


@router.post("/income/{organization_id}", response_model=BaseRelationOrganizationModel, response_class=ORJSONResponse)
async def create(organization_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Доходы организации"""
    organization = db.query(Organization).filter(
        Organization.id == organization_id).first()
    income = IncomeOrganization(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/income/{organization_id}", response_model=List[BaseRelationOrganizationModel], response_class=ORJSONResponse)
async def get(organization_id: int,  db: Session = Depends(get_db)):
    """Все Доходы организации"""
    return db.query(IncomeOrganization).filter(IncomeOrganization.organization_id == organization_id).all()


@router.post("/loss/{organization_id}", response_model=BaseRelationOrganizationModel, response_class=ORJSONResponse)
async def create(organization_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """убытки организации"""
    organization = db.query(Organization).filter(
        Organization.id == organization_id).first()
    income = LossOrganization(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/loss/{organization_id}", response_model=List[BaseRelationOrganizationModel], response_class=ORJSONResponse)
async def get(organization_id: int,  db: Session = Depends(get_db)):
    """Все убытки организации"""
    return db.query(LossOrganization).filter(LossOrganization.organization_id == organization_id).all()


@router.post("/debt/{organization_id}", response_model=BaseRelationOrganizationModel, response_class=ORJSONResponse)
async def create(organization_id: int, count: int, date: date, db: Session = Depends(get_db)):
    """Просроченная задолженность"""
    organization = db.query(Organization).filter(
        Organization.id == organization_id).first()
    income = OverdueDebtRegion(count=count, date=date)
    organization.incomes.append(income)
    db.commit()
    return income


@router.get("/debt/{organization_id}", response_model=List[BaseRelationOrganizationModel], response_class=ORJSONResponse)
async def get(organization_id: int,  db: Session = Depends(get_db)):
    """Получение всех зодолжностей компании"""
    return db.query(OverdueDebtRegion).filter(OverdueDebtRegion.organization_id == organization_id).all()
