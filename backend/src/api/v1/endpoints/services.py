from ....database.models.services import ServiceModel
from datetime import date
from ....database.database import ServicesOrProductsOfThePrice, get_db, Session
from ....database.models.population import PopulationModel
from fastapi.responses import ORJSONResponse
from fastapi import APIRouter
from fastapi import Depends
from typing import List

router = APIRouter(
    prefix="/service",
    tags=["Service"],
    responses={404: {"description": "Not found"}},
)


@router.post("/create", response_model=ServiceModel, response_class=ORJSONResponse)
async def create(name: str, unit: str, price: float, date: date, db: Session = Depends(get_db)):
    """Прайс покупок услуг или предметов или еды"""

    service = ServicesOrProductsOfThePrice(
        name=name, unit=unit, price=price, date=date)
    db.add(service)
    db.commit()
    return service


@router.get("", response_model=List[ServiceModel], response_class=ORJSONResponse)
async def get(id: int = None, db: Session = Depends(get_db)):
    """Получение услуги"""
    filter = (None == None) if id == None else (
        ServicesOrProductsOfThePrice.id == id)
    return db.query(ServicesOrProductsOfThePrice).filter(filter).all()
